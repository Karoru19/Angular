import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistItem } from '../../models/playlist-item';

@Component({
  selector: 'app-sidebar-playlist-entry',
  templateUrl: './sidebar-playlist-entry.component.html',
  styleUrls: ['./sidebar-playlist-entry.component.scss']
})
export class SidebarPlaylistEntryComponent implements OnInit {
  @Input() video: PlaylistItem;
  @Input() id: number;

  constructor(private router: Router) { }

  playVideo() {
    this.router.navigate(['/video', this.video.videoId]);
  }

  ngOnInit() {
  }

}
