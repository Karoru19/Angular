import { Injectable } from '@angular/core';
import { VideoItem } from '../models/video-item';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history: Array<VideoItem> = [];

  constructor() {
    if (JSON.parse(localStorage.getItem('history')) != null) {
      this.history = JSON.parse(localStorage.getItem('history'));
    }
  }

  addEntry(video: VideoItem) {
    console.log(video.title);
    if (this.history.findIndex(x => x.id === video.id) !== -1) {
      this.history.splice(this.history.findIndex(x => x.id === video.id), 1);
    }
    this.history.unshift(video);
    localStorage.setItem('history', JSON.stringify(this.history));
  }

  getHistory() {
    return this.history;
  }

  deleteHistory() {
    this.history = [];
    localStorage.setItem('history', JSON.stringify(this.history));
  }
}
