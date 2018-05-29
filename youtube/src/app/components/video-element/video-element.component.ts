import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-element',
  templateUrl: './video-element.component.html',
  styleUrls: ['./video-element.component.scss']
})
export class VideoElementComponent implements OnInit {
  @Input() video: any;

  constructor() {}

  ngOnInit() {
  }

}
