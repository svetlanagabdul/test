import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authorized: boolean;
  private UserName;


  constructor() { }

  login(user, password): Observable<any> {
    if (user === 'Ivanov' && password === 'Ivanov') {
      this.authorized = true;
      this.UserName = user;
      return of({
        status: 200,
        data: 'SUCCESS'
      });
    } else {
      return of({
        status: 401,
        data: 'UNAUTHORIZED'
      })
    }
  }

  checkAuthorization() {
    return this.authorized;
  }

  getUserName() {
    return this.UserName;
  }
}
