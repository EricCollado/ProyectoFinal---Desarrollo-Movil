/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable guard-for-in */
/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'app/token.service';
import { Router } from '@angular/router';
import { Claves } from 'app/interfaces/clave';


@Component({
  selector: 'app-cambiar-p',
  templateUrl: './cambiar-p.page.html',
  styleUrls: ['./cambiar-p.page.scss'],
})
export class CambiarPPage implements OnInit {

  public claveA;
  public claveN;
  public mensaje;

  formularioContra: FormGroup;
  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private http: HttpClient,
    private router: Router,
    private serviToken: TokenService,

  ) {
    this.formularioContra = this.fb.group({
      'claveA': new FormControl("", Validators.required),
      'claveN': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  cambiarPass(clave: Claves) {
    const url = 'https://adamix.net/defensa_civil/def/cambiar_clave.php';

    const data = new FormData();
    for (const i in clave) {
      data.append(i, clave[i]);
    }
    this.http.post<any>(url, data)
      .subscribe(async (users) => {
        if (this.formularioContra.valid) {
          this.mensaje = (users.mensaje);
          this.serviToken.token = (users.datos.token);

          const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: '',
            message: this.mensaje,
            buttons: ['OK'],
          });
          await alert.present();
        }
      });
  }

  async guardar() {
    const claveNew = {
      clave_anterior: this.claveA,
      clave_nueva: this.claveN,
      token: this.serviToken.token
    };
    this.cambiarPass(claveNew);

    if (this.formularioContra.invalid) {
      const alerta = await this.alertController.create({
        header: 'Datos incompletos',
        subHeader: '',
        message: 'Rellena todos los campos',
        buttons: ['OK'],
      });

      await alerta.present();
      return;
    }

  }

}
