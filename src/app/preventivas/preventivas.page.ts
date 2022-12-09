/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { MedidasApiService } from 'app/medidas-api.service';


@Component({
  selector: 'app-preventivas',
  templateUrl: './preventivas.page.html',
  styleUrls: ['./preventivas.page.scss'],
})
export class PreventivasPage implements OnInit {

  public id;
  public getData: any;
  public resultado: any;
  public info;

  constructor(private activatedRoute: ActivatedRoute, public data: MedidasApiService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.data.getMedidas().subscribe(result=>{
     this.getData=(result);
     this.resultado = this.getData['datos'];

      this.info = (this.resultado.filter( x => x.id == this.id));
    });

 }

}
