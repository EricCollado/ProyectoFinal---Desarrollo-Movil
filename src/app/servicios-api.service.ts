/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiciosApiService {

  constructor(public _http: HttpClient) { }

  getServis(){
    return this._http.get('https://adamix.net/defensa_civil/def/servicios.php');
  }
}
