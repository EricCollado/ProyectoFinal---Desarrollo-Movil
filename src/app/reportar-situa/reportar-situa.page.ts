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
  situaForm: FormGroup;
  images: LocalFile[] = [];

  constructor(
    private http: HttpClient,
    public alertController: AlertController,
    public fb: FormBuilder,
    private platform: Platform,
    private loadingCtrl: LoadingController
  ) {
    this.situaForm = this.fb.group({
        'titulo': new FormControl('', Validators.required),
        'descripcion': new FormControl('', Validators.required),
        'latitud': new FormControl('', Validators.required),
        'longitud': new FormControl('', Validators.required)
    });
  }

  async ngOnInit() {
    this.loadFiles();
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
