import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { YtApiServiceService } from '../../services/yt-api-service.service';
import { VideoDetails } from '../../models/video-details';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private yt: YtApiServiceService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.yt.getVideo(this.id).subscribe(data => {
      this.video.title = data.items[0].snippet.title;
      this.video.channelTitle = data.items[0].snippet.channelTitle;
      this.video.channelId = data.items[0].snippet.channelId;
      this.video.description = data.items[0].snippet.description;
      this.video.likes = data.items[0].statistics.likeCount;
      this.video.dislikes = data.items[0].statistics.dislikeCount;
      this.video.views = data.items[0].statistics.viewCount;
    });
    this.yt.getComments(this.id).subscribe(data => {
      console.log(data);
    });
  }

  id: string;
  video = {} as VideoDetails;
  safe;

  ngOnInit() {
    this.makeSafeUrl();
  }

  makeSafeUrl() {
    // return this.sanitizer.bypassSecurityTrustResourceUrl(
    //   'http://www.youtube.com/embed/' + this.id
    // );
    this.safe = this.sanitizer.bypassSecurityTrustResourceUrl(
      'http://www.youtube.com/embed/' + this.id
    );
  }
}
