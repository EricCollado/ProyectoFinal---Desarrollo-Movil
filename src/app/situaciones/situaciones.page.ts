/* eslint-disable guard-for-in */
/* eslint-disable new-parens */
/* eslint-disable quote-props */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'app/token.service';
import { TokenI } from 'app/interfaces/token';


@Component({
  selector: 'app-situaciones',
  templateUrl: './situaciones.page.html',
  styleUrls: ['./situaciones.page.scss'],
})
export class SituacionesPage implements OnInit {
  public mensaje;
  constructor(
    private http: HttpClient,
    private token: TokenService,


  ) { }



  async ngOnInit() {
    const situations = {
      token: this.token.token
    };
    this.verReporte(situations);
  }

  verReporte(reporte: TokenI){
  const url = 'https://adamix.net/defensa_civil/def/situaciones.php';

  const data = new FormData();
  for(const i in reporte){
    data.append(i, reporte[i]);
  }

  this.http.post<any>(url, data)
    .subscribe(async (voluntarios) => {
      this.mensaje = (voluntarios.datos);
    });
}

}
