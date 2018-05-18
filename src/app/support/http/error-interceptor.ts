import {Injectable, Injector} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const auth = this.injector.get(AuthService);

    return next.handle(req).do(
      (res: HttpEvent<any>) => {
        if (res instanceof HttpResponse) {
          // TODO
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            auth.logout();
          }
        }
      });
  }
}
