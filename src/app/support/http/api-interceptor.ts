import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse, HttpErrorResponse
} from '@angular/common/http';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  private count = 0;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.count++;
    if (this.count === 1) {
      // TODO: show spinner
      console.log('show spinner');
    }

    return next.handle(req).do(
      (res: HttpEvent<any>) => {
        if (res instanceof HttpResponse) {
          this.count--;
          if (this.count === 0) {
            // TODO: hide spinner
            console.log('hide spinner');
          }
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.count--;
        }
      });
  }
}
