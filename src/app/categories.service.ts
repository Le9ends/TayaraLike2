import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface CategoryResult {
  items : Array<{
    productName: String;
    productPrice: Number;
    description: String;
    category: String;
  }>
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  uri = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  getCategory ()  {

    return this.http.get(`${this.uri}/category`)
  }
}
