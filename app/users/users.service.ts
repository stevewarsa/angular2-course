import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UsersService {
    private _url:string = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http:Http) {
    }

    getUsers() {
        return this._http.get(this._url).map(res => res.json());
    }

    addUser(formVal) {
        return this._http.post(this._url, JSON.stringify(formVal))
            .map(res => res.json());
    }

    getUser(id:number) {
        return this._http.get(this.getUserUrl(id))
			.map(res => res.json());
    }

    private getUserUrl(userId){
		return this._url + "/" + userId;
	}
}