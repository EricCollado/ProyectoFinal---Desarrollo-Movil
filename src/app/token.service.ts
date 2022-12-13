/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @angular-eslint/no-output-native */
import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

public token! : string;
}
