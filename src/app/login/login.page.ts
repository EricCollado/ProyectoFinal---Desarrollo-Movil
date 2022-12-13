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
import { Router } from '@angular/router';
import { TokenService } from 'app/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public getData: any;
  public cedula;
  public clave;
  public mensaje: any;
  public token: any;

  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private http: HttpClient,
    private router: Router,
    private serviToken: TokenService
    ) {

    this.formularioLogin = this.fb.group({
      'cedula': new FormControl("",Validators.required),
      'clave': new FormControl("",Validators.required)
    });

  }

  ngOnInit() {
  }

  iniciarSesion(user: Inscripcion){
    const url = 'https://adamix.net/defensa_civil/def/iniciar_sesion.php';

    const data = new FormData();
    for(const i in user){
      data.append(i, user[i]);
    }


    this.http.post<any>(url, data)
    .subscribe(async (users) => {
      if(this.formularioLogin.valid){
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
      if(this.mensaje == 'Bienvenido'){
        this.router.navigate(['./nuevo-menu']);
      }
    });
  }
  async ingresar(){
    const userNew = {
      cedula: this.cedula,
      clave: this.clave
    };

    this.iniciarSesion(userNew);

    if(this.formularioLogin.invalid){
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


  // async ingresar(){
  //   var f = this.formularioLogin.value;

  //   var usuario = JSON.parse(localStorage.getItem('usuario'));

  //   if(usuario.nombre == f.nombre && usuario.password == f.password){
  //     console.log('Ingresado');
  //   }else{
  //     const alert = await this.alertController.create({
  //       header: 'Datos incorrectos',
  //       message: 'Los datos que ingresaste son incorrectos.',
  //       buttons: ['Aceptar']
  //     });

  //     await alert.present();
  //   }
  // }
}

