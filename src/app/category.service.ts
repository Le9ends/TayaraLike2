import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  uri = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  addToCategory (categoryName) {
    const category = {
      categoryName : categoryName
    }
    return this.http.post(`${this.uri}/categories`, categoryName)
  }

  getCategory (categoryName) {
    return this.http.get(`${this.uri}/categories/${categoryName}`)
  }
}
