import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CouponStoreComponent } from './components/coupon-store/coupon-store.component';
import { FooterComponent } from './components/homePage/footer/footer.component';
import { HeaderComponent } from './components/homePage/header/header.component';
import { HomeComponent } from './components/homePage/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SidenavComponent } from './components/homePage/sidenav/sidenav.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './components/admin/admin/admin.component';
import { CompanyComponent } from './components/company/company/company.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { AdminMainPageComponent } from './components/admin/adminMainPage/admin-main-page/admin-main-page.component';
import { CreateCompanyComponent } from './components/admin/ComapnyAdmin/create-company/create-company.component';
import { GetAllCompanyComponent } from './components/admin/getAllCompany/get-all-company/get-all-company.component';
import { GetAllCustomersComponent } from './components/admin/CustomerAdmin/get-all-customers/get-all-customers.component';

import { AddCustomerComponent } from './components/admin/CustomerAdmin/add-customer/add-customer.component';
import { CompanyMainPageComponent } from './components/company/company-main-page/company-main-page.component';
import { CreateCouponComponent } from './components/company/create-coupon/create-coupon.component';
import { GetAllCouponsComponent } from './components/company/get-all-coupons/get-all-coupons.component';
import { GetCouponsByDateComponent } from './components/company/get-coupons-by-date/get-coupons-by-date.component';
import { GetCouponsByCategoryComponent } from './components/company/get-coupons-by-category/get-coupons-by-category.component';
import { GetAllCouponsByPriceComponent } from './components/company/get-all-coupons-by-price/get-all-coupons-by-price.component';
import { CustomerMainComponent } from './components/customer/customer-main/customer-main.component';
import { GetAllCouponsCustComponent } from './components/customer/get-all-coupons-cust/get-all-coupons-cust.component';
import { FoodComponent } from './components/Categories/food/food.component';
import { ElectronicsComponent } from './components/Categories/electronics/electronics.component';
import { SportComponent } from './components/Categories/sport/sport.component';
import { SpaComponent } from './components/Categories/spa/spa.component';
import { VacationComponent } from './components/Categories/vacation/vacation.component';
import { FoodShowComponent } from './components/coupon-show/food/food/food-show/food-show.component';
import { ElectronicsShowComponent } from './components/coupon-show/electronics/ele/electronics-show/electronics-show.component';
import { SpaShowComponent } from './components/coupon-show/spa/spa/spa-show/spa-show.component';
import { SportShowComponent } from './components/coupon-show/sport/sport/sport-show/sport-show.component';
import { VacationShowComponent } from './components/coupon-show/vacation/vacation/vacation-show/vacation-show.component';
import { Page404Component } from './page404/page404.component';
import { ServerIsDownComponent } from './server-is-down/server-is-down.component';
import { GetCustCouponByPriceComponent } from './components/customer/get-cust-coupon-by-price/get-cust-coupon-by-price.component';




@NgModule({
  declarations: [
    
  HeaderComponent,
    
  MainComponent,
       
  FooterComponent,
    
  NavBarComponent,
    
  LayoutComponent,
    
  CouponStoreComponent,
    
  HomeComponent,
    
  LoginComponent,
    
  SidenavComponent,
    
  AdminComponent,
    
  CompanyComponent,
    
  CustomerComponent,
    
  AdminMainPageComponent,
    
  CreateCompanyComponent,
    
  GetAllCompanyComponent,
    
  GetAllCustomersComponent,
       
  AddCustomerComponent,
       
  CompanyMainPageComponent,
       
  CreateCouponComponent,
       
  GetAllCouponsComponent,
       
  GetCouponsByDateComponent,
       
  GetCouponsByCategoryComponent,
       
  GetAllCouponsByPriceComponent,
       
  CustomerMainComponent,
       
  GetAllCouponsCustComponent,
       
  FoodComponent,
       
  ElectronicsComponent,
       
  SportComponent,
       
  SpaComponent,
       
  VacationComponent,
       
  FoodShowComponent,
       
  ElectronicsShowComponent,
       
  SpaShowComponent,
       
  SportShowComponent,
       
  VacationShowComponent,
       
  Page404Component,
       
  ServerIsDownComponent,
       
  GetCustCouponByPriceComponent,
    

    
 
    
  

    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    
  ],


  bootstrap: [LayoutComponent]
})
export class AppModule { }
