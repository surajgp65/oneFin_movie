import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, finalize } from 'rxjs/operators';
import * as $ from 'jquery';
import { CommonService } from './common.service';

@Injectable()
export class HttpErrorInterceptorInterceptor implements HttpInterceptor {
  constructor(private commonService: CommonService) {}
  private totalRequests = 0;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.totalRequests++;
    $('#loader').show();
    const reqWithAuth = request.clone({});

    if (localStorage.getItem('token') != null) {
      reqWithAuth.headers.set(
        'Authorization',
        `Bearer ${localStorage.getItem('token')}`
      );
    }
    return next.handle(reqWithAuth).pipe(
      // retry function for retry api automatically
      // retry(1),
      finalize(() => {
        // all reuest hit then spiiner hide..
        this.totalRequests--;
        if (this.totalRequests === 0) {
          setTimeout(() => {
            $('#loader').hide();
          }, 500);
        }
      }),

      // API error handling...
      catchError((error: HttpErrorResponse) => {
        if (error.error) {
          this.commonService.popUp(error.error.error.message);
        } else if (error) {
          this.commonService.popUp(error.message);
        }
        return throwError(error);
      })
    );
  }
}
