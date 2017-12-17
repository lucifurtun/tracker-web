import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './shared';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {FormsModule} from '@angular/forms';
import {ApolloLink, concat} from 'apollo-link';
import {environment} from '../environments/environment';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ApolloModule,
        HttpLinkModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
    ],
    declarations: [AppComponent],
    providers: [AuthGuard],
    schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(apollo: Apollo, httpLink: HttpLink) {
        const link = httpLink.create({uri: `${environment.serverHttpUrl}/graphql/`});

        const authMiddleware = new ApolloLink((operation, forward) => {
            const token = localStorage.getItem('token');
            if (token) {
                operation.setContext({
                    headers: {
                        Authorization: `JWT ${token}`,
                    }
                });
            }

            return forward(operation);
        });

        apollo.create({
            link: concat(authMiddleware, link),
            cache: new InMemoryCache()
        });
    }
}
