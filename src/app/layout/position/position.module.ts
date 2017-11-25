import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageHeaderModule} from '../../shared';
import {PositionComponent} from './position.component';
import {PositionRoutingModule} from "./position-routing.module";

@NgModule({
    imports: [CommonModule, PositionRoutingModule, PageHeaderModule],
    declarations: [PositionComponent]
})
export class PositionModule {
}
