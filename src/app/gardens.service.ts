import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface SearchResults {
  items : Array<{
  productName: String;
  productPrice: Number;
  description: String;
  category: String;
  fileName: string;
  }>
}


@Injectable({
  providedIn: 'root'
})
export class GardensService {

  uri = 'http://localhost:5000'

  constructor(private http : HttpClient) { }

  getItemByCategory ()  {
     
    return this.http.get(`${this.uri}/search?category=gardens`)

  }
}
