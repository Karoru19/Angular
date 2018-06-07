import { Component, OnInit } from '@angular/core';
import { YtApiServiceService } from '../../services/yt-api-service.service';
import { ActivatedRoute } from '@angular/router';
import { VideoItem } from '../../models/video-item';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  banner: string;
  title: string;
  constructor(
    private ytService: YtApiServiceService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.ytService.getChannelVideos(this.id).subscribe(data => {
        this.items = data.items.map(element => ({
          id: element.id.videoId,
          title: element.snippet.title,
          channelId: element.snippet.channelId,
          channelTitle: element.snippet.channelTitle,
          thumbnailUrl: element.snippet.thumbnails.default.url
        }));
      });
      this.ytService.getChannel(this.id).subscribe(data => {
        this.banner = data.items['0'].brandingSettings.image.bannerImageUrl;
        this.title = data.items['0'].snippet.title;
      });
    });
  }

  id: string;
  items: Array<VideoItem> = [];

  ngOnInit() {}
}
