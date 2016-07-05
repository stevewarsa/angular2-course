import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {NavbarComponent} from './navbar.component';

@Component({
    selector: 'app',
    template: `
    <navbar></navbar>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
    constructor() {
    }
}