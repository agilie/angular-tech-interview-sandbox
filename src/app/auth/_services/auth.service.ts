import {Injectable} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {

  /**
   * Creates user in the application
   */
  signUp(email: string, password: string): Observable<object> {
    return timer(1000).pipe(
      map(() => ({}))
    );
  }

  /**
   * Authorizes existing user in the application
   */
  signIn(email: string, password: string): Observable<object> {
    return timer(1000).pipe(
      map(() => ({}))
    );
  }
}
