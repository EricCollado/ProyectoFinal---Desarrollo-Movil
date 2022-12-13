/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ServiciosApiService } from 'app/servicios-api.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  public getData: any;
  public resultado: any;
  constructor(public servis: ServiciosApiService, private menuController: MenuController ) { }

  async ionViewDidEnter() {
    await this.menuController.enable(true, "menu1");
    await this.menuController.enable(false, "menu2");
  }

  async ngOnInit() {
    this.servis.getServis().subscribe(result=>{
      this.getData=(result);
      this.resultado = this.getData['datos'];
    });
  }

}
