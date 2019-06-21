import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopByCategoriesComponent } from './shop-by-categories/shop-by-categories.component';
import { BuyAgainComponent } from './buy-again/buy-again.component';
import { TodayDealsComponent } from './today-deals/today-deals.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ADMINComponent } from './admin/admin.component';
import { AdminSuperCategoryComponent } from './admin-super-category/admin-super-category.component';
import { AdminMainCategoryComponent } from './admin-main-category/admin-main-category.component';
import { AdminSubCategoryComponent } from './admin-sub-category/admin-sub-category.component';
import { ProductsComponent } from './products/products.component';
import { HeaderProductsComponent } from './header-products/header-products.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FrontEndComponent,
    HeaderComponent,
    FooterComponent,
    ShopByCategoriesComponent,
    BuyAgainComponent,
    TodayDealsComponent,
    CustomerCareComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    ADMINComponent,
    AdminSuperCategoryComponent,
    AdminMainCategoryComponent,
    AdminSubCategoryComponent,
    ProductsComponent,
    HeaderProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
