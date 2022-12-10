/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-var */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";
//import * as L from "leaflet";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  public nombre: string = "";
  public apellido: string = "";
  public latitud: number = 18.586394107372797;
  public longitud: number = -68.38744827924789;
  public pais: string = "";
  map: L.map;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  async ngOnInit() {

    await this.http.get<any>('https://adamix.net/defensa_civil/def/albergues.php')
      .subscribe(res => {
        const albergues = res.datos;
        for (const alb of albergues) {
          var marker = L.marker([alb.lng, alb.lat]).addTo(this.map);
          marker.bindPopup("<b>Codigo:</b> " + alb.codigo + "<br><b>Ciudad:</b> " + alb.ciudad + "<br><b>Edificio:</b> " + alb.edificio + "<br><b>Coordinador:</b> " + alb.coordinador + "<br><b>Telefono:</b> " + alb.telefono + "<br><b>Capacidad:</b> " + alb.capacidad + ".").openPopup();
        }
      });

  }
  ionViewDidEnter() {
    this.map = L.map('map').setView([18.518502, -71.202297], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);


  }

}
