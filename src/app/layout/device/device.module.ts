import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageHeaderModule} from '../../shared';
import {DeviceRoutingModule} from './device-routing.module';
import {DeviceComponent} from './device.component';
import {DeviceDetailComponent} from './components/detail/detail.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {BrowserModule} from '@angular/platform-browser';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        DeviceRoutingModule,
        PageHeaderModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyCn7nDVAgxdIjZbuv8QqEo5Ox15MYTCWVA'})
    ],
    declarations: [DeviceComponent, DeviceDetailComponent]
})
export class DeviceModule {
}
