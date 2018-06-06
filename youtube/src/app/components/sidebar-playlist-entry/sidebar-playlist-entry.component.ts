import { Component, OnInit, Input } from '@angular/core';
import { VideoItem } from '../../models/video-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-playlist-entry',
  templateUrl: './sidebar-playlist-entry.component.html',
  styleUrls: ['./sidebar-playlist-entry.component.scss']
})
export class SidebarPlaylistEntryComponent implements OnInit {
  @Input() video: VideoItem;
  @Input() id: number;

  constructor(private router: Router) { }

  playVideo() {
    this.router.navigate(['/video', this.video.id]);
  }

  ngOnInit() {
  }

}
