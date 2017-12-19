import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DeviceDetailComponent} from './components/detail/detail.component';
import {DeviceListComponent} from './components/list/list.component';

const routes: Routes = [
    {
        path: '', component: DeviceListComponent
    },
    {
        path: ':id', component: DeviceDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeviceRoutingModule {
}
