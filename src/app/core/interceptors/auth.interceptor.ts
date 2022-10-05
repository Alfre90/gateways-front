import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import {
  BehaviorSubject,
  catchError,
  filter,
  Observable,
  switchMap,
  take,
  throwError
} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(private auth: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // We take the token and clone the request adding the authorization header
    const token = this.auth.getAuthorization();
    let req = request;
    if (token) {
      req = this.addTokenHeader(req, token);
    }
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          // Here we handle first time 401 error status because accessToken has expired
          return this.handle401Error(req, next);
        }
        return throwError(err);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    // We check the is there is not a refreshing function executing
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.auth.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.auth.setUser(token.accessToken);
          this.refreshTokenSubject.next(token.accessToken);
          return next
            .handle(this.addTokenHeader(request, token.accessToken))
            .pipe(
              catchError((err: HttpErrorResponse) => {
                // If it throw an error we logout the user because refresh token is not longer valid
                this.auth.removeUser();
                this.router.navigateByUrl('/auth');
                return throwError(err);
              })
            );
        })
      );
    }
    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }

  // Function to add the token to the request header
  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: token
      }
    });
  }
}
