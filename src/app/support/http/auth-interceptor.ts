import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const auth = this.injector.get(AuthService);

    const token = auth.token;
    let headers = null;

    if (token) {
      headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
    } else {
      headers = {
        'Content-Type': 'application/json'
      };
    }

    req = req.clone({
      setHeaders: headers
    });

    return next.handle(req);
  }
}
