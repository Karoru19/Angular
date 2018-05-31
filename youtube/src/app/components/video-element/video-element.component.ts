import { Component, OnInit, Input } from '@angular/core';
import { VideoItem } from '../../models/video-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-element',
  templateUrl: './video-element.component.html',
  styleUrls: ['./video-element.component.scss']
})
export class VideoElementComponent implements OnInit {
  @Input() video: VideoItem;

  constructor(private router: Router) {}

  playVideo() {
    this.router.navigate(['/video', this.video.id]);
  }

  ngOnInit() {}
}
