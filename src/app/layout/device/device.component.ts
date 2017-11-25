import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {Device} from './device';

@Component({
    selector: 'app-position',
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.scss'],
    animations: [routerTransition()]
})
export class DeviceComponent implements OnInit {
    devices: Device[] = [
        {id: 11, serialNumber: '1234'},
        {id: 22, serialNumber: '4321'},
        {id: 33, serialNumber: '2255'},
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
