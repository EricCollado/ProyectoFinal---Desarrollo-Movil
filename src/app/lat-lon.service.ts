/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LatLonService {

  constructor() { }

  public lat! : string;
  public lon! : string;
}
