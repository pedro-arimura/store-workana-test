import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class RegisteredProductsComponent {
  products_list?: any;
  empty_products: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    let response_data: any;
    const url = 'http://localhost:8080/get-products.php';
    this.http.get(url).subscribe(response => {
      if(response == "") {
        this.empty_products = true;
      } else {
        this.products_list = response;
      }
    });
  }

  returnMenu() {
    this.router.navigateByUrl("");
  }

  getSum(num1: any, num2: any) {
    return (parseFloat(num1) + parseFloat(num2)).toFixed(2)
  }
}
