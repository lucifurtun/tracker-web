import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    mutation = gql`
        mutation login($email: String, $password: String) {
            login(email: $email, password: $password){
                user {
                    token
                }
            }
        }`;

    constructor(public router: Router, private apollo: Apollo) {
    }

    ngOnInit() {
    }

    onSubmit($event, form) {
        $event.preventDefault();

        const body = form.value;
        // localStorage.setItem('isLoggedin', 'true');
        this.apollo.mutate<any>({
            mutation: this.mutation,
            variables: {email: body.email, password: body.password}
        }).toPromise().then((data) => {
            localStorage.setItem('token', data.data.login.user.token);
            this.router.navigateByUrl('/');
        });
    }
}
