import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {Device} from './device';
import {DeviceService} from './device.service';

@Component({
    selector: 'app-position',
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.scss'],
    animations: [routerTransition()],
    providers: [DeviceService]
})
export class DeviceComponent implements OnInit {
    devices: Device[];

    constructor(private service: DeviceService) {
    }

    ngOnInit() {
        this.service.getDevices().then((data: any) => {
            this.devices = data.data.devices;
        });
    }
}
