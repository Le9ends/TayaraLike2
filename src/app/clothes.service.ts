import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
export class ClothesService {

  uri = 'http://localhost:5000'

  constructor(private http : HttpClient) { }

  getItemByCategory ()  {
     
    return this.http.get(`${this.uri}/search?category=clothes`)

  }
}
