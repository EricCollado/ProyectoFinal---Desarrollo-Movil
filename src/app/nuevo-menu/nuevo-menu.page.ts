/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit} from '@angular/core';
import { TokenService } from 'app/token.service';

@Component({
  selector: 'app-nuevo-menu',
  templateUrl: './nuevo-menu.page.html',
  styleUrls: ['./nuevo-menu.page.scss'],
})
export class NuevoMenuPage implements OnInit {


  constructor(
    private serviToken: TokenService
  ) { }
  public token: Array<any> = [];


  ngOnInit() {
    this.serviToken.disparadorToken.subscribe(data => {
      this.token.push(data);
      console.log('Token: ', this.token);
    });
  }

}
