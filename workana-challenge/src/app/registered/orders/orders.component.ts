import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class RegisteredOrdersComponent {
  orders_list?: any;
  empty_orders: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    let response_data: any;
    const url = 'http://localhost:8080/get-orders.php';
    this.http.get(url).subscribe(response => {
      if(response == "") {
        this.empty_orders = true;
      } else {
        this.orders_list = response;
      }
    });
  }

  returnMenu() {
    this.router.navigateByUrl("");
  }

}
