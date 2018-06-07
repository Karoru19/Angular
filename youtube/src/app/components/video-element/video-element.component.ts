import { Component, OnInit, Input } from '@angular/core';
import { VideoItem } from '../../models/video-item';
import { Router } from '@angular/router';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-video-element',
  templateUrl: './video-element.component.html',
  styleUrls: ['./video-element.component.scss']
})
export class VideoElementComponent implements OnInit {
  @Input() video: VideoItem;

  isInPlaylist: boolean;

  constructor(private router: Router, private playlistService: PlaylistService) {}

  playVideo() {
    this.router.navigate(['/video', this.video.id]);
  }

  goChannel(){
    this.router.navigate(['/channel', this.video.channelId]);
  }

  addToPlaylist() {
    this.playlistService.addEntry(this.video);
    this.isInPlaylist = true;
  }

  removeFromPlaylist() {
    this.playlistService.deleteEntry(this.video);
    this.isInPlaylist = false;
  }

  ngOnInit() {
    this.isInPlaylist = this.playlistService.exists(this.video);
  }
}
