/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlberguesApiService } from 'app/albergues-api.service';


@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.page.html',
  styleUrls: ['./sitios.page.scss'],
})
export class SitiosPage implements OnInit {

  codigoId: string;
  public code;
  public getData: any;
  public resultado: any;
  public info;
  public test;
  constructor( private activatedRoute: ActivatedRoute, public data: AlberguesApiService ) { }

  ngOnInit() {
   this.codigoId = this.activatedRoute.snapshot.paramMap.get('codigo');
     this.data.getAlbergues().subscribe(result=>{
      this.getData=(result);
      this.resultado = this.getData['datos'];

       this.info = (this.resultado.filter( x => x.codigo == this.codigoId));
     });

  }

}
