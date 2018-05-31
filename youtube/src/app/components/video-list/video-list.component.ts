import { Component, OnInit } from '@angular/core';
import { YtApiServiceService } from '../../services/yt-api-service.service';
import { VideoItem } from '../../models/video-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  items: Array<VideoItem> = [];

  constructor(private yt: YtApiServiceService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      const query = params['query'] || '';
      yt.getVideos(query).subscribe(data => {
        this.items = data.items.map(element => ({
          id: element.id.videoId,
          title: element.snippet.title,
          channelId: element.snippet.channelId,
          channelTitle: element.snippet.channelTitle,
          thumbnailUrl: element.snippet.thumbnails.default.url
        }));
      });
    });
  }

  ngOnInit() {}
}
