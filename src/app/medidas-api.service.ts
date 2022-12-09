/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedidasApiService {
  constructor(public _http: HttpClient) { }

    getMedidas(){
      return this._http.get('https://adamix.net/defensa_civil/def/medidas_preventivas.php');
    }
}
