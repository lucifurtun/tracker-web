import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeviceService} from '../../device.service';
import {Device} from '../../device';
import {routerTransition} from '../../../../router.animations';
import {id} from '@swimlane/ngx-datatable/release/utils';

@Component({
    selector: 'app-detail',
    styleUrls: ['./detail.component.scss'],
    templateUrl: './detail.component.html',
    providers: [DeviceService],
    animations: [routerTransition()],
})
export class DeviceDetailComponent implements OnInit {
    private socket: WebSocket;
    device: Device;

    constructor(private route: ActivatedRoute, private service: DeviceService) {
    }

    ngOnInit() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.service.getDevice(id).then((data: any) => {
            this.device = data.data.device;
        });

        this.socket = new WebSocket('ws://127.0.0.1:8000');
        this.socket.onmessage = (e) => {
            const data = JSON.parse(e.data);
            this.device = {...this.device, latestPosition: {lat: data.lat, lng: data.lng}};
        };
    }
}
