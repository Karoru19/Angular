import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  items = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        title: 'Some Title ' + i,
        channel: 'Some Channel ' + i,
        thumb: '../../../assets/thumb.png'
      });
    }
  }

  ngOnInit() {
  }

}
