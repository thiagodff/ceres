import { Injectable } from '@angular/core';

import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
	constructor (
		private userService: UserService
	) {}

	authenticate (email: string, password: string): void {
		this.userService.setToken(email);
	}
}
