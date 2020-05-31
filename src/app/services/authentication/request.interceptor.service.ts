import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { TokenService } from "./token.service";

@Injectable({ providedIn: 'root' })
export class RequestInterceptorService implements HttpInterceptor {
	constructor (private tokenService: TokenService) {}

	intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (this.tokenService.hasToken()) {
			let token = this.tokenService.getToken();
			req = req.clone({
				setHeaders: { "x-access-token": token }
			});
		}

		return next.handle(req);
	}
}
