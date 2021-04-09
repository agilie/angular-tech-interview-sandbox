import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {

  async logError(e: Error): Promise<void> {
    console.log('==== Something Wrong Happened ====');
    console.error(e.message, e.stack);
    console.log('----------------------------------');
  }

}
