/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasApiService {
  constructor(public _http: HttpClient) { }

  getNotis(){
    return this._http.get('https://adamix.net/defensa_civil/def/noticias.php');
  }
}
