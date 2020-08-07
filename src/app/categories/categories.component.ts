import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  items : Array<{
    name: string;
    productName: String;
    productPrice: Number;
    description: String;
    category: String;
  }> 


  constructor(private category : CategoriesService) { }

  ngOnInit(): void {
  }

  getItemByCategory () {
    
  }
 
}
