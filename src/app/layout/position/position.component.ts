import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {routerTransition} from "../../router.animations";

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.scss'],
    animations: [routerTransition()]
})
export class PositionComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
