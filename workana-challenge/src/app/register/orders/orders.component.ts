import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class RegisterOrdersComponent {
  products_list: any;
  products_divs:number[] = [];
  products_data: any = {};
  order_products: any = [{}];
  total_value?: any = 0;
  total_taxes?: any = 0;
  total_value_with_taxes?: any = 0;
  constructor(private http: HttpClient, private router: Router) {}

  returnMenu() {
    this.router.navigateByUrl("");
  }

  addProduct(){
    this.products_divs.push(this.products_divs.length);
  }

  removeProduct(array_position: any){
    this.products_divs.splice(this.products_divs.indexOf(array_position), 1);
    this.order_products.splice(this.order_products.indexOf(array_position), 1);

    this.updateValues();
  }

  ngOnInit() {
    let returnData: any;
    const url = 'http://localhost:8080/get-products.php';
    this.http.get(url).subscribe(response => {
      if(response != "") {
        returnData = response;
        this.products_list = response;
        returnData.forEach((element: any) => {
            this.products_data[element.product_id] = {
              'product_name': element.product_name,
              'product_price': element.product_price,
              'category_tax': element.category_tax
            };
        });
      }
    });
  }

  updateItens(event: any, product_div_id: any){
    let elem = event.srcElement;
    let qtd = elem.value;
    let productId = elem.closest('div').querySelector('select').value;

    elem.closest('div').querySelector(`#baseValue${product_div_id}`).innerHTML = (this.products_data[productId].product_price * qtd).toFixed(2);
    elem.closest('div').querySelector(`#taxesValue${product_div_id}`).innerHTML = ((this.products_data[productId].product_price * (this.products_data[productId].category_tax/100)) * qtd).toFixed(2);
    elem.closest('div').querySelector(`#totalValue${product_div_id}`).innerHTML = (((this.products_data[productId].product_price * (this.products_data[productId].category_tax/100)) * qtd) + (this.products_data[productId].product_price * qtd)).toFixed(2);
    this.order_products[product_div_id] = {
      'product_name': this.products_data[productId].product_name,
      'total_value': (this.products_data[productId].product_price * qtd).toFixed(2),
      'total_tax': ((this.products_data[productId].product_price * (this.products_data[productId].category_tax/100)) * qtd).toFixed(2),
      'total_value_with_tax': (((this.products_data[productId].product_price * (this.products_data[productId].category_tax/100)) * qtd) + (this.products_data[productId].product_price * qtd)).toFixed(2),
    };
    this.updateValues();
  }

  updateValues() {
    this.total_taxes = 0;
    this.total_value = 0;
    this.total_value_with_taxes = 0;

    this.order_products.forEach((element: any) => {
      this.total_value += parseFloat(element.total_value);
      this.total_taxes += parseFloat(element.total_tax);
      this.total_value_with_taxes += parseFloat(element.total_value_with_tax);
    });
    this.total_taxes = this.total_taxes.toFixed(2);
    this.total_value = this.total_value.toFixed(2);
    this.total_value_with_taxes = this.total_value_with_taxes.toFixed(2);
  }

  onSubmit() {
    var products_names: any = [];
    const user_id = localStorage.getItem('uid');
    this.order_products.forEach((element: any) => {
      products_names.push(element.product_name);
    });
    let returnData: any;
    const url = 'http://localhost:8080/insert-order.php';
    const data = {
      "order_products": products_names.join(", "),
      "order_value": this.total_value_with_taxes,
      "user_id": user_id
    };
    this.http.post(url, data).subscribe(response => {
      if(response != "") {
        returnData = response;
        console.log(response);
      }
    });
  }
}
