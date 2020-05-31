import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as jwtDecode from "jwt-decode";

import { TokenService } from '../authentication/token.service';
import { IUser } from '../../models/IUser';

@Injectable({ providedIn: 'root' })
export class UserService {
	private userSubject = new BehaviorSubject<IUser>(null);

	constructor (private tokenService: TokenService) {
		if (this.tokenService.getToken())
			this.decodeAndNotify();
	}

	setToken (token: string): void {
		this.tokenService.setToken(token);
		this.decodeAndNotify();
	}

	getUser (): Observable<IUser> {
		return this.userSubject.asObservable();
	}

	get user (): IUser {
		return this.userSubject.getValue();
	}

	logout (): void {
		this.tokenService.removeToken();
		this.userSubject.next(null);
	}

	isLogged (): boolean {
		return this.tokenService.hasToken();
	}

	private decodeAndNotify (): void {
		let user = JSON.parse(this.tokenService.getToken()) as IUser;
		this.userSubject.next(user);
	}
}
