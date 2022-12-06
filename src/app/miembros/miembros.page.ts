/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { MiembrosApiService } from 'app/miembros-api.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.page.html',
  styleUrls: ['./miembros.page.scss'],
})
export class MiembrosPage implements OnInit {
  public getData: any;
  public resultado: any;
  constructor(public membs: MiembrosApiService) { }

  async ngOnInit() {
    this.membs.getMemb().subscribe(result=>{
      this.getData=(result);
      this.resultado = this.getData['datos'];
    });
  }

}

