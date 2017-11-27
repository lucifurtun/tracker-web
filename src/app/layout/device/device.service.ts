import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class DeviceService {
    private getDevicesQuery = gql`
        query {
            devices {
                id,
                serialNumber
            }
        }`;

    constructor(private apollo: Apollo) {
    }

    getDevices() {
        return this.apollo.query({query: this.getDevicesQuery}).toPromise();
    }
}
