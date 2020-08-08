import { Component, OnInit } from '@angular/core';
import { SearchService } from './../search.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items : Array<{
    name: string;
    productName: String;
    productPrice: Number;
    description: String;
    category: String;
    file : string;
    fileName: string;
    }>  
products : Array<{ 
 name: string;
 productName: String;
 productPrice: Number;
 description: String;
 category: String;
 file : string;
 fileName: string;
}>
term : string = '';

constructor(private search : SearchService) { }

ngOnInit(): void {
 this.getItem()
}

getItem() {
 this.search.getItems().subscribe((result : any) =>{
   this.products = result
   this.items = result
   console.log('data',result)
   console.log(this.items)
 })
}
changeItems() {
 console.log(this.term)
 this.products = this.items.filter(item => item.productName.includes(this.term))    
}

} 