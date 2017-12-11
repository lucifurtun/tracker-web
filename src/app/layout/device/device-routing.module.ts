import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DeviceComponent} from './device.component';
import {DeviceDetailComponent} from './components/detail/detail.component';

const routes: Routes = [
    {
        path: '', component: DeviceComponent
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
