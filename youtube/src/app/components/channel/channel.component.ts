import { Component, OnInit } from '@angular/core';
import { YtApiServiceService } from '../../services/yt-api-service.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  constructor(private ytService: YtApiServiceService) {
    ytService.getChannel('UCsvn_Po0SmunchJYOWpOxMg').subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {}
}
