import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../../device.service';
import {Device} from '../../device';
import {routerTransition} from '../../../../router.animations';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()],
    providers: [DeviceService]
})
export class DeviceListComponent implements OnInit {
    devices: Device[];

    constructor(private service: DeviceService) {
    }

    ngOnInit() {
        this.service.getDevices().then((data: any) => {
            this.devices = data.data.devices;
        });
    }
}
