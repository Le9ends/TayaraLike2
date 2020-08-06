import { Component, OnInit } from '@angular/core';
import { SearchService } from './../search.service';


@Component({
  selector: 'app-test-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items : Array<{
       productName: String;
       productPrice: Number;
       description: String;
       category: String;
       }>  
  term : '';

  constructor(private search : SearchService) { }

  ngOnInit(): void {
    this.getItem()
  }

  getItem() {
    this.search.getItems().subscribe((result : any) =>{
      this.items = result
      console.log('data',result)
      console.log(this.items)
    })
  }

} 
