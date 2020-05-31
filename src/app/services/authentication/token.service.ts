import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {
	private static readonly KEY = "TESTEauthTokenETSET";

	hasToken (): boolean {
		return Boolean(this.getToken());
	}

	getToken (): string {
		return window.localStorage.getItem(TokenService.KEY);
	}

	setToken (token: string): void {
		window.localStorage.setItem(TokenService.KEY, JSON.stringify({ email: token }));
	}

	removeToken (): void {
		window.localStorage.removeItem(TokenService.KEY);
	}
}
