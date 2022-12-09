/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { MedidasApiService } from 'app/medidas-api.service';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.page.html',
  styleUrls: ['./medidas.page.scss'],
})
export class MedidasPage implements OnInit {
  public getData: any;
  public resultado: any;

  constructor(public medidas: MedidasApiService ) { }

  async ngOnInit() {
    this.medidas.getMedidas().subscribe(result=>{
      this.getData=(result);
      this.resultado = this.getData['datos'];
    });
  };
}
