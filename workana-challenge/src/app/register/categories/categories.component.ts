import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class RegisterCategoriesComponent {
  categoryName?: string;
  categoryTax?: number;
  constructor(private http: HttpClient, private router: Router) {}

  returnMenu() {
    this.router.navigateByUrl("");
  }

  onSubmit() {
    let response_data: any;
    const url = 'http://localhost:8080/insert-category.php';
    const data = { categoryName: this.categoryName, categoryTax: this.categoryTax };
    this.http.post(url, data).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      // Handle login error
    });
  }

}
