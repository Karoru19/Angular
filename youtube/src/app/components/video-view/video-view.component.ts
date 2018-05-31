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
  ) {}

  id: string;
  video: VideoDetails;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.yt.getVideo(this.id).subscribe(data => {
      console.log(data);
    });
  }

  makeSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'http://www.youtube.com/embed/' + this.id
    );
  }
}
