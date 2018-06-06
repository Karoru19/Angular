import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { YtApiServiceService } from '../../services/yt-api-service.service';
import { VideoItem } from '../../models/video-item';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: Array<VideoItem> = [];

  constructor(private historyService: HistoryService) {
    this.history = historyService.getHistory();
    console.log(this.history);
  }

  deleteHistory() {
    this.historyService.deleteHistory();
    this.history = this.historyService.getHistory();
  }

  ngOnInit() {}
}
