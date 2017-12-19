import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageHeaderModule} from '../../shared';
import {DeviceRoutingModule} from './device-routing.module';
import {DeviceDetailComponent} from './components/detail/detail.component';
import {AgmCoreModule} from '@agm/core';
import {MapComponent} from '../components/map/map.component';
import {DeviceListComponent} from './components/list/list.component';

@NgModule({
    imports: [
        CommonModule,
        DeviceRoutingModule,
        PageHeaderModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyCn7nDVAgxdIjZbuv8QqEo5Ox15MYTCWVA'})
    ],
    declarations: [DeviceDetailComponent, MapComponent, DeviceListComponent]
})
export class DeviceModule {
}
