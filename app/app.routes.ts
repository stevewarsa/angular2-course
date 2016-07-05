import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users/users.component';
import {NewUserComponent} from './users/newuser.component';
import {UserNotFoundComponent} from './users/usernotfound.component';
import {PostsComponent} from './posts.component';
import {CanDeactivateGuard} from './shared/candeactivate.guard'; 

export const routes: RouterConfig = [
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'users', 
    component: UsersComponent
  },
  { 
    path: 'posts', 
    component: PostsComponent
  },
  {
    path: 'users/new',
    component: NewUserComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'not-found',
    component: UserNotFoundComponent
  },
  { path: '', redirectTo: 'home' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  CanDeactivateGuard
];
