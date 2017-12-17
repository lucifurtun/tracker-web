import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeviceService} from '../../device.service';
import {Device} from '../../device';
import {routerTransition} from '../../../../router.animations';
import {environment} from '../../../../../environments/environment';


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
        this.route.params.subscribe((params) => {
            console.log(params);
            const id = parseInt(params['id'], 10);
            this.service.getDevice(id).then((data: any) => {
                this.device = data.data.device;
            });
        });


        this.socket = new WebSocket(environment.serverWSUrl);
        this.socket.onmessage = (e) => {
            const data = JSON.parse(e.data);
            console.log(data);
            this.device = {...this.device, lastPosition: {lat: data.lat, lng: data.lng}};
        };
    }
}
