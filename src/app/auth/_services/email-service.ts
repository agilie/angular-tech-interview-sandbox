import {Injectable} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class EmailService {

  /**
   * Checks if email is already taked
   * @return true - email already exists on server
   * @return false - email is free to use
   */
  isEmailExists(email: string): Observable<boolean> {
    return timer(2000).pipe(
      map(() => true)
    );
  }
}
