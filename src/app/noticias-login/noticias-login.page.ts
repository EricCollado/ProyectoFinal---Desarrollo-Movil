import { Component, OnInit } from '@angular/core';
import { NoticiasApiService } from 'app/noticias-api.service';
import { TokenService } from 'app/token.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-noticias-login',
  templateUrl: './noticias-login.page.html',
  styleUrls: ['./noticias-login.page.scss'],
})
export class NoticiasLoginPage implements OnInit {
  public getData: any;
  public resultado: any;

  constructor(public notis: NoticiasApiService,
    private serviToken: TokenService,
    private menuController: MenuController) { }


  async ngOnInit() {
    this.notis.getNotis().subscribe(result => {
      this.getData = (result);
      this.resultado = this.getData['datos'];
    });

  }

}
