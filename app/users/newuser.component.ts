import {Component} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {Router, CanDeactivate, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Rx';

import {UsersService} from './users.service';
import {User} from './user';

@Component({
    selector: 'newuser',
    templateUrl: 'app/users/newuser.component.html',
    providers: [NewUserComponent, UsersService]
})
export class NewUserComponent {
    userForm:ControlGroup;
    _programmaticNavigate:boolean = false;
    private sub: Subscription;
    private user:User = new User();
    private userType:string = "New";

    constructor(
        fb:FormBuilder, 
        private _router:Router,
        private _route:ActivatedRoute,
        private _userService:UsersService) {

        this.userForm = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            address: fb.group({
                street: ['', Validators.required],
                suite: [],
                city: ['', Validators.required],
                zipcode: ['', Validators.required]
            })
        });
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            if (!params['id']) {
                return;
            }
            // in the following, '+' converts the string 'id' to a number
            let id = +params['id'];
            this._userService.getUser(id).subscribe(
                user => {
                    if (user) { 
                        this.user = user;
                        this.userType = "Edit";
                    }
                }, 
                response => {
                    if (response.status == 404) {
                        this._programmaticNavigate = true;
                        this._router.navigate(['/not-found']);
                    }
                }
            );
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save() {
        this._programmaticNavigate = true;
        this._userService.addUser(this.userForm.value)
            .subscribe(x => {
                // Ideally, here we'd want:
                // this.form.markAsPristine();
                // According to Mosh, this will be coming in future versions
                this._router.navigate(['/users']);
            });
    }

    canDeactivate(): Observable<boolean> | boolean {
        if (this._programmaticNavigate) {
            return true;
        } else {
            return confirm("Are you sure you want to leave before submitting?");
        }
    }
}