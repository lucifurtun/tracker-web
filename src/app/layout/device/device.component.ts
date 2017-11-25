import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {routerTransition} from "../../router.animations";

@Component({
    selector: 'app-position',
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.scss'],
    animations: [routerTransition()]
})
export class DeviceComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
