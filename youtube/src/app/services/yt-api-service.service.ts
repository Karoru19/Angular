import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YtApiServiceService {
  base = 'https://www.googleapis.com/youtube/v3/';
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getVideos(query: string) {
    const url = this.base + 'search';
    const params = new HttpParams()
      .append('key', this.apiKey)
      .append('q', query)
      .append('part', 'snippet')
      .append('maxResults', '50')
      .append('type', 'video');
    const options = { params: params };
    return this.http.get<any>(url, options);
  }

  getVideo(id: string) {
    const url = this.base + 'videos';
    const params = new HttpParams()
      .append('key', this.apiKey)
      .append('id', id)
      .append('part', 'snippet,contentDetails,statistics');
    const options = { params: params };
    return this.http.get<any>(url, options);
  }

  getRelated(id: string) {
    const url = this.base + 'search';
    const params = new HttpParams()
      .append('key', this.apiKey)
      .append('part', 'snippet')
      .append('maxResults', '20')
      .append('relatedToVideoId', id)
      .append('type', 'video');
    const options = { params: params };
    return this.http.get<any>(url, options);
  }

  getComments(id: string) {
    const url = this.base + 'commentThreads';
    const params = new HttpParams()
      .append('key', this.apiKey)
      .append('videoId', id)
      .append('part', 'snippet,replies');
    const options = { params: params };
    return this.http.get<any>(url, options);
  }
}
