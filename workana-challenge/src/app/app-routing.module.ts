import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { isLoggedGuard } from './is-logged.guard';
import { RegisteredProductsComponent } from './registered/products/products.component';
import { RegisteredOrdersComponent } from './registered/orders/orders.component';
import { RegisteredCategoriesComponent } from './registered/categories/categories.component';
import { RegisterCategoriesComponent } from './register/categories/categories.component';
import { RegisterProductsComponent } from './register/products/products.component';
import { RegisterOrdersComponent } from './register/orders/orders.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: '', component: HomeComponent, title: "Home", canActivate: [isLoggedGuard]},
    {path: 'registered/products', component: RegisteredProductsComponent, title: "Registered Products", canActivate: [isLoggedGuard]},
    {path: 'registered/orders', component: RegisteredOrdersComponent, title: "Registered Orders", canActivate: [isLoggedGuard]},
    {path: 'registered/categories', component: RegisteredCategoriesComponent, title: "Registered Categories", canActivate: [isLoggedGuard]},
    {path: 'register/products', component: RegisterProductsComponent, title: "Register Products", canActivate: [isLoggedGuard]},
    {path: 'register/orders', component: RegisterOrdersComponent, title: "Register Orders", canActivate: [isLoggedGuard]},
    {path: 'register/categories', component: RegisterCategoriesComponent, title: "Register Categories", canActivate: [isLoggedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
