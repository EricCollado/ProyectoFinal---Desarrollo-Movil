/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlberguesApiService {
  constructor(public _http: HttpClient) { }

  getAlbergues(){
    return this._http.get('https://cors-anywhere.herokuapp.com/https://adamix.net/defensa_civil/def/albergues.php');
  }
}

