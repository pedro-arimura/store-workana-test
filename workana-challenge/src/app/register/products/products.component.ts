import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class RegisterProductsComponent {
  categories_list?: any;
  empty_categories: boolean = false;
  product_name?: string;
  product_category_id?: number;
  product_price?: number;
  constructor(private http: HttpClient, private router: Router) {}

  returnMenu() {
    this.router.navigateByUrl("");
  }

  ngOnInit() {
    const url = 'http://localhost:8080/get-categories.php';
    this.http.get(url).subscribe(response => {
      if(response != "") {
        this.categories_list = response;
      } else {
        this.empty_categories = true;
      }
    });
  }

  registerProduct() {
    let response_data: any;
    const url = 'http://localhost:8080/insert-product.php';
    const data = { product_name: this.product_name, product_category_id: this.product_category_id, product_price: this.product_price};
    this.http.post(url, data).subscribe(response => {
      response_data = response;
      console.log(response);
      // Handle successful login
    }, error => {
      console.log(error);
      // Handle login error
    });
  }
}
