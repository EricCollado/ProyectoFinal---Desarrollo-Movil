/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { AlberguesApiService } from 'app/albergues-api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-albergues',
  templateUrl: './albergues.page.html',
  styleUrls: ['./albergues.page.scss'],
})
export class AlberguesPage implements OnInit {
  public getData: any;
  public resultado: [] = [];
  public lugar: [] = [];
  public lug = 0;
  public listaVideos = [];

  constructor(public albergues: AlberguesApiService) { }
  isModalOpen = false;
  isViOpen = false;
  isCaitOpen = false;



  setPowder(isOpen: boolean, int) {
    this.isModalOpen = isOpen;

  }

  async ngOnInit() {
      this.albergues.getAlbergues().subscribe(result=>{
      this.getData=(result);
      this.resultado = this.getData['datos'];
      console.log(this.resultado);
    });
  }
}

