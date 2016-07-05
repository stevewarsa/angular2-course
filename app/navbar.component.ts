import {Component, OnInit, OnDestroy} from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET, Event } from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private _currentRoute:string;

    constructor(
        private activated: ActivatedRoute, 
        private router: Router) {
    }

    ngOnInit() {
        console.log("Init NavbarComponent");
        this.sub = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this._currentRoute = event.url.substring(1);
            }
        });
    }

    ngOnDestroy() {
        console.log("Destroy NavbarComponent")
        this.sub.unsubscribe();
    }

    isCurrentRoute(route:string):boolean {
        return route == this._currentRoute;
    }
}