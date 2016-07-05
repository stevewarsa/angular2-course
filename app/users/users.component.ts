import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {UsersService} from './users.service';

@Component({
    selector: 'users',
    template: `
    <h1>Users</h1>
    <p>
        <a class="btn btn-primary" [routerLink]="['/users/new']">Add User</a>
    </p>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let user of _users">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td><a [routerLink]="['/users/new', {id: user.id}]"><span class="glyphicon glyphicon-edit"></span></a></td>
                <td><span class="glyphicon glyphicon-remove"></span></td>
            </tr>
        </tbody>
    </table>
    `,
    providers: [UsersService],
    directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit {
    private _users = [];
    constructor(private _usersService:UsersService) {}

    ngOnInit() {
        this._usersService.getUsers()
            .subscribe(res => { 
                this._users = res; 
            });
    }
}