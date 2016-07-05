System.register(['@angular/core', '@angular/common', '@angular/router', './users.service', './user'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, users_service_1, user_1;
    var NewUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            let NewUserComponent_1;
            let NewUserComponent = NewUserComponent_1 = class NewUserComponent {
                constructor(fb, _router, _route, _userService) {
                    this._router = _router;
                    this._route = _route;
                    this._userService = _userService;
                    this._programmaticNavigate = false;
                    this.user = new user_1.User();
                    this.userType = "New";
                    this.userForm = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.required],
                        phone: ['', common_1.Validators.required],
                        address: fb.group({
                            street: ['', common_1.Validators.required],
                            suite: [],
                            city: ['', common_1.Validators.required],
                            zipcode: ['', common_1.Validators.required]
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
                        this._userService.getUser(id).subscribe(user => {
                            if (user) {
                                this.user = user;
                                this.userType = "Edit";
                            }
                        }, response => {
                            if (response.status == 404) {
                                this._programmaticNavigate = true;
                                this._router.navigate(['/not-found']);
                            }
                        });
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
                canDeactivate() {
                    if (this._programmaticNavigate) {
                        return true;
                    }
                    else {
                        return confirm("Are you sure you want to leave before submitting?");
                    }
                }
            };
            NewUserComponent = NewUserComponent_1 = __decorate([
                core_1.Component({
                    selector: 'newuser',
                    templateUrl: 'app/users/newuser.component.html',
                    providers: [NewUserComponent, users_service_1.UsersService]
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, users_service_1.UsersService])
            ], NewUserComponent);
            exports_1("NewUserComponent", NewUserComponent);
        }
    }
});
//# sourceMappingURL=newuser.component.js.map