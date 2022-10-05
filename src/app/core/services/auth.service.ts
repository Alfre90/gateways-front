import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from '@environment/environment';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = API_URL + '/authentication';
  urlRequested: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.setUser({
      name: 'Alfre',
      lastname: 'Martinez',
      token: 'Bearer dffewfswes.....'
    });
  }

  refreshToken(): Observable<any> {
    return this.http.get(this.baseUrl + '/refresh-token');
  }

  setUser(_user: any): void {
    this.cookieService.set('user', JSON.stringify(_user));
  }

  getUser() {
    let _user = JSON.parse(this.cookieService.get('user'));
    return _user;
  }

  removeUser(): void {
    this.cookieService.delete('user');
  }

  isAuthorized(): boolean {
    if (this.cookieService.get('user')) {
      let _user = JSON.parse(JSON.stringify(this.cookieService.get('user')));

      if (_user != null) {
        return true;
      } else {
        this.urlRequested = this.router.url;
        this.router.navigate(['/auth']);
        return false;
      }
    } else {
      this.urlRequested = this.router.url;
      this.router.navigate(['/auth']);
      return false;
    }
  }

  getAuthorization(): string {
    if (this.isAuthorized()) {
      return 'Bearer ' + this.getUser().token;
    } else {
      return '';
    }
  }
}
