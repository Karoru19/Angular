import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DerpiService {

  constructor(private http: HttpClient) { }

  getThumbs() {
    return this.http.get('');
  }
}
