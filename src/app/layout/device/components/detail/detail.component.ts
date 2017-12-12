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
    device: Device;

    constructor(private route: ActivatedRoute, private service: DeviceService) {
    }

    ngOnInit() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.service.getDevice(id).then((data: any) => {
            this.device = data.data.device;
        });
    }
}
