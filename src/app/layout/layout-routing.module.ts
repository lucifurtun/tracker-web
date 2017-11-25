import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
    {
        path: 'layout',
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: 'dashboard'},
            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
            {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
            {path: 'forms', loadChildren: './form/form.module#FormModule'},
            {path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule'},
            {path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule'},
            {path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule'}
        ]
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: 'devices'},
            {path: 'positions', loadChildren: './position/position.module#PositionModule'},
            {path: 'devices', loadChildren: './device/device.module#DeviceModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
