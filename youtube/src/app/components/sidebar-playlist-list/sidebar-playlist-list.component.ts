import { Component, OnInit } from '@angular/core';
import { VideoItem } from '../../models/video-item';
import { YtApiServiceService } from '../../services/yt-api-service.service';

@Component({
  selector: 'app-sidebar-playlist-list',
  templateUrl: './sidebar-playlist-list.component.html',
  styleUrls: ['./sidebar-playlist-list.component.scss']
})
export class SidebarPlaylistListComponent implements OnInit {
  playlist: Array < VideoItem > = [];

  constructor(private yt: YtApiServiceService) {
    const query = 'jyc row';
    yt.getVideos(query).subscribe(data => {
      this.playlist = data.items.map(element => ({
        id: element.id.videoId,
        title: element.snippet.title,
        channelId: element.snippet.channelId,
        channelTitle: element.snippet.channelTitle,
        thumbnailUrl: element.snippet.thumbnails.default.url
      }));
    });
  }

  ngOnInit() {}

}
