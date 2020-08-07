import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  uri = 'http://localhost:5000'

  constructor(private http : HttpClient) { }

  getItemByCategory ()  {
     
    return this.http.get(`${this.uri}/search?category=multimedia`)

  }
}
