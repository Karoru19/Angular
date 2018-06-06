import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { YtApiServiceService } from '../../services/yt-api-service.service';
import { VideoDetails } from '../../models/video-details';
import { HistoryService } from '../../services/history.service';
import { VideoItem } from '../../models/video-item';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit {
  comments = [];
  related: Array<VideoItem> = [];

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private yt: YtApiServiceService,
    private router: Router,
    private historyService: HistoryService
  ) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      this.yt.getVideo(this.id).subscribe(data => {
        this.video.title = data.items[0].snippet.title;
        this.video.channelTitle = data.items[0].snippet.channelTitle;
        this.video.channelId = data.items[0].snippet.channelId;
        this.video.description = data.items[0].snippet.description;
        this.video.likes = data.items[0].statistics.likeCount;
        this.video.dislikes = data.items[0].statistics.dislikeCount;
        this.video.views = data.items[0].statistics.viewCount;
        historyService.addEntry({
          id: this.id,
          title: data.items[0].snippet.title,
          channelId: data.items[0].snippet.channelId,
          channelTitle: data.items[0].snippet.channelTitle,
          thumbnailUrl: data.items[0].snippet.thumbnails.default.url
        });
      });
      this.yt.getComments(this.id).subscribe(data => {
        this.comments = data.items.map(c => ({
          author: c.snippet.topLevelComment.snippet.authorDisplayName,
          imgUrl: c.snippet.topLevelComment.snippet.authorProfileImageUrl,
          likeCount: c.snippet.topLevelComment.snippet.likeCount,
          text: c.snippet.topLevelComment.snippet.textOriginal,
          replies:
            c.replies === undefined
              ? []
              : c.replies.comments.map(r => ({
                  author: r.snippet.authorDisplayName,
                  imgUrl: r.snippet.authorProfileImageUrl,
                  likeCount: r.snippet.likeCount,
                  text: r.snippet.textOriginal
                }))
        }));
      });
      this.yt.getRelated(this.id).subscribe(data => {
        this.related = data.items.map(i => ({
          id: i.id.videoId,
          title: i.snippet.title,
          channelId: i.snippet.channelId,
          channelTitle: i.snippet.channelTitle,
          thumbnailUrl: i.snippet.thumbnails.default.url
        }));
      });
      this.makeSafeUrl();
    });
  }

  id: string;
  video = {} as VideoDetails;
  safe;

  ngOnInit() {
    this.makeSafeUrl();
  }

  playVideo(id) {
    this.router.navigate(['/video', id]);
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
