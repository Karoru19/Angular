import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistItem } from '../../models/playlist-item';
import { Router } from '@angular/router';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlist-element',
  templateUrl: './playlist-element.component.html',
  styleUrls: ['./playlist-element.component.scss']
})
export class PlaylistElementComponent implements OnInit {
  @Input() video: PlaylistItem;
  @Input() id: number;
  @Input() first: boolean;
  @Input() last: boolean;
  @Output() updatePlaylist = new EventEmitter<any>();

  constructor(private router: Router, private playlistService: PlaylistService) { }

  playVideo() {
    this.router.navigate(['/video', this.video.videoId]);
  }

  goChannel() {
    this.router.navigate(['/channel', this.video.channelId]);
  }

  up() {
    this.playlistService.up(this.video);
    this.updatePlaylist.emit();
  }

  down() {
    this.playlistService.down(this.video);
    this.updatePlaylist.emit();
  }

  remove() {
    this.playlistService.deleteEntry({
      id: this.video.videoId,
      title: this.video.title,
      channelId: this.video.channelId,
      channelTitle: this.video.channelTitle,
      thumbnailUrl: this.video.thumbnailUrl
    });
    this.updatePlaylist.emit();
  }

  ngOnInit() {
  }

}
