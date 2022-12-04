/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { NoticiasApiService } from 'app/noticias-api.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  public getData: any;
  public resultado: any;
  constructor(public notis: NoticiasApiService) { }

  async ngOnInit() {
    this.notis.getNotis().subscribe(result=>{
      this.getData=(result);
      this.resultado = this.getData['datos'];
    });
  }

}
