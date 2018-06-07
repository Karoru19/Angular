import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { PlaylistItem } from '../../models/playlist-item';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {
  playlist: Array < PlaylistItem > = [];

  constructor(private playlistService: PlaylistService) {
    this.playlist = playlistService.getPlaylist().sort(function(a, b) { return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0); } );
  }

  updatePlaylist() {
    this.playlist = this.playlistService.getPlaylist().sort(function(a, b) { return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0); } );
  }

  ngOnInit() {
  }

}
