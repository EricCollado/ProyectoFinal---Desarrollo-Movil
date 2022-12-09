/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { AlberguesApiService } from 'app/albergues-api.service';

@Component({
  selector: 'app-albergues',
  templateUrl: './albergues.page.html',
  styleUrls: ['./albergues.page.scss'],
})
export class AlberguesPage implements OnInit {
  public getData: any;
  public resultado;

  constructor(public albergues: AlberguesApiService) { }

  async ngOnInit() {
      this.albergues.getAlbergues().subscribe(result=>{
      this.getData=(result);
      this.resultado = this.getData['datos'];
    });
  }
}

