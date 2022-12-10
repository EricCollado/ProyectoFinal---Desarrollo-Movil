/* eslint-disable @angular-eslint/no-output-native */
import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  @Output() disparadorToken: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
