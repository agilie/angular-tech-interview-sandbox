import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  /**
   * Creates user in the application
   */
  signUp(email: string, password: string): Observable<object> {
    const body = {
      email,
      password
    };
    return this.http.post(`${env.apiHost}/users`, body);
  }

  /**
   * Authorizes existing user in the application
   */
  signIn(email: string, password: string): Observable<object> {
    return this.http.get(`${env.apiHost}/users/1`);
  }
}
