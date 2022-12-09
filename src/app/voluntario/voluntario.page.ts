/* eslint-disable quote-props */
/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inscripcion } from 'app/interfaces/voluntario';
import { AlertController } from '@ionic/angular';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.page.html',
  styleUrls: ['./voluntario.page.scss'],
})
export class VoluntarioPage implements OnInit {
public getData: any;
public nombre;
public apellido;
public correo;
public telefono;
public cedula;
public clave;
public mensaje: any;

volunForm: FormGroup;

  constructor(
    private http: HttpClient,
    public alertController: AlertController,
    public fb: FormBuilder
    ) {
      this.volunForm = this.fb.group({
        'cedula': new FormControl('', Validators.required),
        'nombre': new FormControl('', Validators.required),
        'apellido': new FormControl('', Validators.required),
        'clave': new FormControl('', Validators.required),
        'correo': new FormControl('', Validators.required),
        'telefono': new FormControl('', Validators.required),

      });
  }


  ngOnInit() {
  }

   crearUsuario(voluntario: Inscripcion){
    const url = 'https://adamix.net/defensa_civil/def/registro.php';

    const data = new FormData();
    for(const i in voluntario){
      data.append(i, voluntario[i]);
    }


     this.http.post<any>(url, data)
    .subscribe(async (voluntarios) => {
      if(this.volunForm.valid){
      this.mensaje = (voluntarios.mensaje);
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


 async inscribir(){
    const voluntarioNew = {
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      telefono: this.telefono,
      cedula: this.cedula,
      clave: this.clave
    };

    this.crearUsuario(voluntarioNew);

    if(this.volunForm.invalid){
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


