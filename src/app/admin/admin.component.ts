import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  items: Array<{
    show: Boolean;
    productName: String;
    productPrice: Number;
    description: String;
    category: String;
    fileName: string;
  }>;
  products: Array<{
    show: Boolean;
    productName: String;
    productPrice: Number;
    description: String;
    category: String;
    fileName: string;
  }>;
  term: string = '';
  details: UserDetails;
  constructor(private auth: AuthenticationService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getItem();
    this.auth.admin().subscribe(
      (admin) => {
        this.details = admin;
      },
      (err) => {
        console.error(err);
      }
    );
  }
  getItem() {
    this.http.get(`http://localhost:5000/admin/`).subscribe((result: any) => {
      this.products = result;
      this.items = result;
      console.log('data', result);
      console.log(this.items);
    });
  }
  handleAccept(x) {
    this.http
      .get(`http://localhost:5000/update?name=${x}`)
      .subscribe((result) => {
        location.reload();
      });
  }
  handleDelete(x) {
    this.http.delete(`http://localhost:5000/?name=${x}`).subscribe((result) => {
      location.reload();
    });
  }
}
