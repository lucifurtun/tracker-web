import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageHeaderModule} from '../../shared';
import {DeviceRoutingModule} from './device-routing.module';
import {DeviceComponent} from './device.component';
import {DeviceDetailComponent} from './components/detail/detail.component';
import {AgmCoreModule} from '@agm/core';
import {MapComponent} from '../components/map/map.component';

@NgModule({
    imports: [
        CommonModule,
        DeviceRoutingModule,
        PageHeaderModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyCn7nDVAgxdIjZbuv8QqEo5Ox15MYTCWVA'})
    ],
    declarations: [DeviceComponent, DeviceDetailComponent, MapComponent]
})
export class DeviceModule {
}
