/* eslint-disable guard-for-in */
/* eslint-disable new-parens */
/* eslint-disable quote-props */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { LatLonService } from 'app/lat-lon.service';
import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";
import { TokenService } from 'app/token.service';
import { TokenI } from 'app/interfaces/token';

@Component({
  selector: 'app-mapa-reporte',
  templateUrl: './mapa-reporte.page.html',
  styleUrls: ['./mapa-reporte.page.scss'],
})
export class MapaReportePage implements OnInit {
  map: L.map;

  constructor(
    private http: HttpClient,
    private token: TokenService
  ) { }

  async ngOnInit() {
    const situations = {
      token: this.token.token
    };
    this.verReporte(situations);
  }

  ionViewDidEnter() {
    this.map = L.map('map').setView([18.518502, -71.202297], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  async verReporte(reporte: TokenI) {
    const url = 'https://adamix.net/defensa_civil/def/situaciones.php';

    const data = new FormData();
    for (const i in reporte) {
      data.append(i, reporte[i]);
    }
    console.log(data)

    await this.http.post<any>(url, data)
      .subscribe(voluntarios => {
        const situaciones = (voluntarios.datos);
        for (const sit of situaciones) {
          var marker = L.marker([sit.longitud, sit.latitud]).addTo(this.map);
          marker.bindPopup("<b>Fecha:</b> " + sit.fecha + "<br><b>Titulo:</b> " + sit.titulo + "<br><b>Descripcion:</b> " + sit.descripcion + "<br><b>Estado:</b> " + sit.estado + ".").openPopup();
        }
      });
  }
}
