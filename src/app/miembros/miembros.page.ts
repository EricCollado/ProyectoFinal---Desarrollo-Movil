/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { MiembrosApiService } from 'app/miembros-api.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.page.html',
  styleUrls: ['./miembros.page.scss'],
})
export class MiembrosPage implements OnInit {
  public getData: any;
  public resultado: any;
  constructor(public membs: MiembrosApiService, private menuController: MenuController) { }


  async ionViewDidEnter() {
    await this.menuController.enable(true, "menu1");
    await this.menuController.enable(false, "menu2");
  }

  async ngOnInit() {
    this.membs.getMemb().subscribe(result=>{
      this.getData=(result);
      this.resultado = this.getData['datos'];
    });
  }

}

