import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items: Array<{name: string}>;
  term : String;


  constructor() { }

  ngOnInit(): void {
    this.items = new Array({ name: "archie" },{ name: "jake" }, { name: "richard" })
    this.term = ''
  }

}
