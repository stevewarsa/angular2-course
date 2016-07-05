System.register(['@angular/core', '@angular/router', './users.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, users_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            let UsersComponent = class UsersComponent {
                constructor(_usersService) {
                    this._usersService = _usersService;
                    this._users = [];
                }
                ngOnInit() {
                    this._usersService.getUsers()
                        .subscribe(res => {
                        this._users = res;
                    });
                }
            };
            UsersComponent = __decorate([
                core_1.Component({
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
                    providers: [users_service_1.UsersService],
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [users_service_1.UsersService])
            ], UsersComponent);
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map