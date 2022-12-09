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
import { Inscripcion } from 'app/interfaces/voluntario';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  public getData: any;
  public cedula;
  public correo;
  public mensaje: any;

  formularioRecuperar: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private http: HttpClient,
  ) {
    this.formularioRecuperar =this.fb.group({
      'cedula': new FormControl("",Validators.required),
      'correo': new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }

  recuperarCon(user: Inscripcion){
    const url = 'https://adamix.net/defensa_civil/def/recuperar_clave.php';

    const data = new FormData();
    for(const i in user){
      data.append(i, user[i]);
    }


    this.http.post<any>(url, data)
    .subscribe(async (users) => {
      if(this.formularioRecuperar.valid){
      this.mensaje = (users.mensaje);
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
  async recuperar(){
    const contra = {
      cedula: this.cedula,
      correo: this.correo
    };

    this.recuperarCon(contra);

    if(this.formularioRecuperar.invalid){
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
