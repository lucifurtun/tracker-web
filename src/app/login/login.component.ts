import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';


const LogInQuery = gql`
mutation {
    login(username: "lucianfurtun@gmail.com", password: "apollo"){
        user {
            token
        }
    }
}
`;


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loading: boolean;
    currentUser: any;

    constructor(public router: Router, private apollo: Apollo) {
    }

    ngOnInit() {
    }

    onLoggedin() {
        // localStorage.setItem('isLoggedin', 'true');
        this.apollo.query<any>({query: gql`{ hello }`}).toPromise().then(console.log);

        // this.apollo.watchQuery<any>({
        //     query: LogInQuery
        // })
        //     .valueChanges
        //     .subscribe(({data}) => {
        //         console.log(data);
        //     });
    }
}
