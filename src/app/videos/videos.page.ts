/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { VideosApiService } from 'app/videos-api.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  public getData: any;
  public resultado: any;
  constructor(public videos: VideosApiService) { }

  async ngOnInit() {
    this.videos.getVideos().subscribe(result=>{
      this.getData=(result);
      this.resultado = this.getData['datos'];
    });
  }

}
