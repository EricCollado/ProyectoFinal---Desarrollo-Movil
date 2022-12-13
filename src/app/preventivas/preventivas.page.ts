/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { MedidasApiService } from 'app/medidas-api.service';
import { MenuController } from '@ionic/angular';

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

  constructor(private activatedRoute: ActivatedRoute, public data: MedidasApiService,private menuController: MenuController) { }

  async ionViewDidEnter() {
    await this.menuController.enable(true, "menu1");
    await this.menuController.enable(false, "menu2");
  }
  
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.data.getMedidas().subscribe(result=>{
     this.getData=(result);
     this.resultado = this.getData['datos'];

      this.info = (this.resultado.filter( x => x.id == this.id));
    });

 }

}
