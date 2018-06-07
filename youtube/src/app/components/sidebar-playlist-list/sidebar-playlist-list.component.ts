import { Component, OnInit } from '@angular/core';
// import { YtApiServiceService } from '../../services/yt-api-service.service';
import { PlaylistItem } from '../../models/playlist-item';
import { PlaylistService } from '../../services/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-playlist-list',
  templateUrl: './sidebar-playlist-list.component.html',
  styleUrls: ['./sidebar-playlist-list.component.scss']
})
export class SidebarPlaylistListComponent implements OnInit {
  playlist: Array < PlaylistItem > = [];

  constructor(public router: Router, private ps: PlaylistService) {
    this.playlist = ps.getPlaylist();
  }

  ngOnInit() {}

}
