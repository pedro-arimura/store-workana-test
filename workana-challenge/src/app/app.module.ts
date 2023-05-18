import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisteredProductsComponent } from './registered/products/products.component';
import { RegisteredCategoriesComponent } from './registered/categories/categories.component';
import { RegisteredOrdersComponent } from './registered/orders/orders.component';
import { RegisterCategoriesComponent } from './register/categories/categories.component';
import { RegisterOrdersComponent } from './register/orders/orders.component';
import { RegisterProductsComponent } from './register/products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisteredProductsComponent,
    RegisteredCategoriesComponent,
    RegisteredOrdersComponent,
    RegisterCategoriesComponent,
    RegisterOrdersComponent,
    RegisterProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
