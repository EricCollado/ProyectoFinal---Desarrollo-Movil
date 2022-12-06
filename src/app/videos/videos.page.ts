/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { VideosApiService } from 'app/videos-api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  public getData: any;
  public resultado: any;

  public listaVideos = [];
  public link2 = 'https://www.youtube.com/embed/';

  constructor(public videos: VideosApiService, private sanitizer: DomSanitizer) { }


  transform(url: string, url2){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url+url2);
  }

  async ngOnInit() {
    this.videos.getVideos().subscribe(result=>{
      this.getData=(result);
      this.resultado = this.getData['datos'];
    });
  }

}
