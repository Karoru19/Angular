import { Injectable } from '@angular/core';
import { VideoItem } from '../models/video-item';
import { PlaylistItem } from '../models/playlist-item';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  playlist: Array<PlaylistItem> = [];

  constructor() {
    if (JSON.parse(localStorage.getItem('playlist')) != null) {
      this.playlist = JSON.parse(localStorage.getItem('playlist'));
    }
  }

  addEntry(video: VideoItem) {
    console.log(video.title);
    if (this.playlist.findIndex(x => x.videoId === video.id) === -1) {
      // this.history.splice(this.history.findIndex(x => x.videoId === video.id), 1);
      const element: PlaylistItem = {
        channelId: video.channelId,
        channelTitle: video.channelTitle,
        thumbnailUrl: video.thumbnailUrl,
        title: video.title,
        videoId: video.id,
        id: this.playlist.length + 1
      };
      this.playlist.push(element);
      localStorage.setItem('playlist', JSON.stringify(this.playlist));
    }
  }

  getPlaylist() {
    return this.playlist;
  }

  getCount() {
    return this.playlist.length;
  }

  getCurrent(videoId: string) {
    return this.playlist.find(x => x.videoId === videoId);
  }

  getNext(id: number) {
    return this.playlist.find(x => x.id === id + 1);
  }

  isNext(videoId: string) {
    return this.playlist.find(x => x.videoId === videoId).id === this.playlist.length ? false : true;
  }

  exists(video: VideoItem) {
    return this.playlist.findIndex(x => x.videoId === video.id) !== -1 ? true : false;
  }

  deleteEntry(video: VideoItem) {
    this.playlist.splice(this.playlist.findIndex(x => x.videoId === video.id), 1);
    localStorage.setItem('playlist', JSON.stringify(this.playlist));
  }

  deletePlaylist() {
    this.playlist = [];
    localStorage.setItem('playlist', JSON.stringify(this.playlist));
  }
}
