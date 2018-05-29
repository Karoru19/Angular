import { Component, OnInit } from '@angular/core';
import { YtApiServiceService } from '../../services/yt-api-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  constructor(private yt: YtApiServiceService) {}

  ngOnInit() {
    // this.yt.getVideos('').subscribe(data => {
    //   // data = data.items.map(element => element.snippet);
    //   console.log(data);
    // });
    // this.yt.getVideo('cH-yA8U2XgI').subscribe(data => {
    //   console.log(data);
    // });
  }
}
