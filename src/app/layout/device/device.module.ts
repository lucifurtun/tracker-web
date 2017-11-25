import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageHeaderModule} from '../../shared';
import {DeviceRoutingModule} from "./device-routing.module";
import {DeviceComponent} from "./device.component";

@NgModule({
    imports: [CommonModule, DeviceRoutingModule, PageHeaderModule],
    declarations: [DeviceComponent]
})
export class DeviceModule {
}
