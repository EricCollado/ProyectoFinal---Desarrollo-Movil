import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  constructor(
    private menuController: MenuController

  ) { }

  async ionViewDidEnter() {
    await this.menuController.enable(true, "menu1");
    await this.menuController.enable(false, "menu2");
  }

  ngOnInit() {
  }

}
