/* eslint-disable guard-for-in */
/* eslint-disable new-parens */
/* eslint-disable quote-props */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { LatLonService } from 'app/lat-lon.service';



@Component({
  selector: 'app-mapa-reporte',
  templateUrl: './mapa-reporte.page.html',
  styleUrls: ['./mapa-reporte.page.scss'],
})
export class MapaReportePage implements OnInit {
  public latitud;
  public longitud;
  constructor(
    private coordinates: LatLonService,

  ) { }


  ngOnInit() {
    this.latitud = this.coordinates.lat;
    this.longitud = this.coordinates.lon;
    console.log('klk',this.man);
    console.log(this.coordinates.lon);
  }
}
