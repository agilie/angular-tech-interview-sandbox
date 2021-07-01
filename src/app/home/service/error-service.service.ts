import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {

  constructor() { }

  displayError(e: Error): void {
    console.log(e);
  }
}
