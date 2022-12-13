/* eslint-disable guard-for-in */
/* eslint-disable new-parens */
/* eslint-disable quote-props */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Reportes } from 'app/interfaces/situaciones';
import { TokenService } from 'app/token.service';
import { LatLonService } from 'app/lat-lon.service';

const IMAGE_DIR = 'stored-image';


interface LocalFile{
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-reportar-situa',
  templateUrl: './reportar-situa.page.html',
  styleUrls: ['./reportar-situa.page.scss'],
})
export class ReportarSituaPage implements OnInit {

  public titulo;
  public descripcion;
  public latitud;
  public longitud;
  public foto = '';
  situaForm: FormGroup;
  images: LocalFile[] = [];
  public mensaje;

  constructor(
    private http: HttpClient,
    public alertController: AlertController,
    public fb: FormBuilder,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private token: TokenService,
    private coordi: LatLonService,
  ) {
    this.situaForm = this.fb.group({
        'titulo': new FormControl('', Validators.required),
        'descripcion': new FormControl('', Validators.required),
        'foto': new FormControl(),
        'latitud': new FormControl('', Validators.required),
        'longitud': new FormControl('', Validators.required)
    });

  }


  async ngOnInit() {
    //this.loadFiles();
  }

  crearReporte(situacion: Reportes){
     const url = 'https://adamix.net/defensa_civil/def/nueva_situacion.php';

     const data = new FormData();
     for(const i in situacion){
       data.append(i, situacion[i]);
     }

     this.http.post<any>(url, data)
    .subscribe(async (voluntarios) => {
      if(this.situaForm.valid){
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
  async guardar(){
    const reporteNew = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      latitud: this.latitud,
      longitud: this.longitud,
      foto: this.foto,
      token: this.token.token
    };
    this.coordi.lat = (this.latitud);
    this.coordi.lon = (this.longitud);

    this.crearReporte(reporteNew);

    if(this.situaForm.invalid){
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

  async loadFiles(){
    this.images = [];

    const loading = await this.loadingCtrl.create({
      message: 'Loading data...'
    });
    await loading.present();

    Filesystem.readdir({
      directory: Directory.Data,
      path: IMAGE_DIR
    }).then((result) => {
      this.loadFileData(result.files);
    }, async (err) => {
      await Filesystem.mkdir({
        directory: Directory.Data,
        path: IMAGE_DIR
      });
    }).then( () => {
      loading.dismiss();
    });
  }

   async loadFileData(fileNames: any[]) {
    for (const f of fileNames) {
      const filePath = `${IMAGE_DIR}/${f}`;

      const readFile = await Filesystem.readFile({
        directory: Directory.Data,
        path: filePath
      });
      this.images.push({
        name: f,
        path: filePath,
        data: `data:image/jpeg;base64,${readFile.data}`
      });
    }
   }

  async selectImage(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });
    console.log(image);
    if (image) {
      this.saveImage(image);
    }
  }
    async saveImage(photo: Photo){
        const base64Data = await this. readAsBase64(photo);

        const fileName = new Date().getTime() + '.jpeg';
        const savedFile = await Filesystem.writeFile({
          directory: Directory.Data,
          path: `${IMAGE_DIR}/${fileName}`,
          data: base64Data
        });

        console.log('saved:', savedFile);
        this.loadFiles();
    }

    async readAsBase64(photo: Photo){
      if (this.platform.is('hybrid')){
        const file = await Filesystem.readFile({
          path: photo.path
        });
        return file.data;
      }
      else {
        const response = await fetch(photo.webPath);
        const blob = await response.blob();
        return await this.convertBlobToBase64(blob) as string;
      }
    }

    convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
      const reader = new FileReader;
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
}
