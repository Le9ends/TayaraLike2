import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface SearchResults {
  term : String;
  items : Array<{
  productName: String;
  productPrice: Number;
  description: String;
  category: String;
  fileName: string;
  }>
  products : Array<{ name: string;
    productName: String;
    productPrice: Number;
    description: String;
    category: String;
    file : string;
    fileName: string;
  }>

}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  uri = 'http://localhost:5000'

  constructor(private http: HttpClient) { }
 
  getItems ()  {

    return this.http.get(`${this.uri}/`)
  }
}
