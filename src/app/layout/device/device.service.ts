import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class DeviceService {
    constructor(private apollo: Apollo) {
    }

    getDevices() {
        const query = gql`
            query {
                devices {
                    id,
                    serialNumber
                }
            }`;

        return this.apollo.query({query: query}).toPromise();
    }

    getDevice(id: number) {
        const query = gql`
            query device($id: Int){
                device(id:$id){
                    serialNumber
                    latestPosition{
                        lat,
                        lng,
                    }
                }
            }`;

        return this.apollo.query({query: query, variables: {id: id}}).toPromise();
    }
}
