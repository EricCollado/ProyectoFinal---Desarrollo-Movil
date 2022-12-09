/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import * as L from "leaflet";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  public latitud: -69.89178;
  public longitud: 18.47893;

  public latitud2: -69.89178;
  public longitu: 18.47893;
  //map: L.map;

  constructor(
    private http: HttpClient
  ) { }

  async ngOnInit() {

  //   await this.http.get<any>('http://nominatim.openstreetmap.org/reverse?format=json&lat=' + this.latitud + '&lon=' + this.longitud)
  //     .subscribe(res => {
  //       const lugar = res.address;
  //       this.pais = lugar.country;
  //       const marker = L.marker([this.latitud, this.longitud]).addTo(this.map);
  //       marker.bindPopup("<b>Nombre:</b> " + this.nombre + "<br><b>Apellido:</b> " + this.apellido + "<br><b>País:</b> " + this.pais + ".").openPopup();
  //     });
  // }
}
}
