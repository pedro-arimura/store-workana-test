import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class RegisteredCategoriesComponent {
  categories_list?: any;
  empty_categories: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    let response_data: any;
    const url = 'http://localhost:8080/get-categories.php';
    this.http.get(url).subscribe(response => {
      if(response == "") {
        this.empty_categories = true;
      } else {
        this.categories_list = response;
      }
    });
  }

  returnMenu() {
    this.router.navigateByUrl("");
  }
}
