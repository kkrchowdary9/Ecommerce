import { HeaderProductsComponent } from './header-products/header-products.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { AdminSubCategoryComponent } from './admin-sub-category/admin-sub-category.component';
import { AdminMainCategoryComponent } from './admin-main-category/admin-main-category.component';
import { AdminSuperCategoryComponent } from './admin-super-category/admin-super-category.component';
import { ADMINComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { BuyAgainComponent } from './buy-again/buy-again.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { TodayDealsComponent } from './today-deals/today-deals.component';
import { ShopByCategoriesComponent } from './shop-by-categories/shop-by-categories.component';
import { StartComponent } from './start/start.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: FrontEndComponent, children:[
    {path: '', component: StartComponent},
    {path: 'shop-by-categories', component: ShopByCategoriesComponent},
    {path: 'today-deals' , component: TodayDealsComponent},
    {path: 'customer-care' , component: CustomerCareComponent},
    {path: 'buy-again' , component: BuyAgainComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup' , component: SignupComponent},
    {path: 'headerProducts', component: HeaderProductsComponent}
  ]},
  {path: 'admin' , component: ADMINComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent, children:[
    {path: 'super-category' , component:AdminSuperCategoryComponent},
    {path: 'main-category', component: AdminMainCategoryComponent},
    {path: 'sub-category', component: AdminSubCategoryComponent},
    {path: 'products' , component: ProductsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
