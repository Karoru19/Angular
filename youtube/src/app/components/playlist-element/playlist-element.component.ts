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
  @Output() updatePlaylist = new EventEmitter<any>();

  length: number;

  constructor(private router: Router, private playlistService: PlaylistService) {
    this.length = playlistService.getCount();
  }

  playVideo() {
    this.router.navigate(['/video', this.video.videoId]);
  }

  up() {
    this.playlistService.up(this.video);
    this.updatePlaylist.emit();
  }

  down() {
    this.playlistService.down(this.video);
    this.updatePlaylist.emit();
  }

  ngOnInit() {
  }

}
