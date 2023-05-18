import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string;
  password?: string;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    let response_data: any;
    const url = 'http://localhost:8080/login.php';
    const data = { email: this.username, password: this.password };
    this.http.post(url, data).subscribe(response => {
      response_data = response;
      if(response_data.error) {
        console.log("ah, man");
      } else {
        localStorage.setItem("uid", response_data.id_user);
        this.router.navigateByUrl("");
      }
      // Handle successful login
    }, error => {
      console.log(error);
      // Handle login error
    });
  }
}
