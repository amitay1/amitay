import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/homePage/home/home.component';
import { MainComponent } from './components/main/main.component';
import { CompanyComponent } from './components/company/company/company.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { AdminMainPageComponent } from './components/admin/adminMainPage/admin-main-page/admin-main-page.component';
import { CreateCompanyComponent } from './components/admin/ComapnyAdmin/create-company/create-company.component';
import { GetAllCompanyComponent } from './components/admin/getAllCompany/get-all-company/get-all-company.component';
import { AddCustomerComponent } from './components/admin/CustomerAdmin/add-customer/add-customer.component';
import { GetAllCustomersComponent } from './components/admin/CustomerAdmin/get-all-customers/get-all-customers.component';
import { CompanyMainPageComponent } from './components/company/company-main-page/company-main-page.component';
import { CreateCouponComponent } from './components/company/create-coupon/create-coupon.component';
import { GetAllCouponsComponent } from './components/company/get-all-coupons/get-all-coupons.component';
import { GetCouponsByCategoryComponent } from './components/company/get-coupons-by-category/get-coupons-by-category.component';
import { GetCouponsByDateComponent } from './components/company/get-coupons-by-date/get-coupons-by-date.component';
import { GetAllCouponsByPriceComponent } from './components/company/get-all-coupons-by-price/get-all-coupons-by-price.component';
import { CustomerMainComponent } from './components/customer/customer-main/customer-main.component';
import { GetAllCouponsCustComponent } from './components/customer/get-all-coupons-cust/get-all-coupons-cust.component';
import { ElectronicsComponent } from './components/Categories/electronics/electronics.component';
import { FoodComponent } from './components/Categories/food/food.component';
import { SpaComponent } from './components/Categories/spa/spa.component';
import { SportComponent } from './components/Categories/sport/sport.component';
import { VacationComponent } from './components/Categories/vacation/vacation.component';
import { CouponStoreComponent } from './components/coupon-store/coupon-store.component';
import { Page404Component } from './page404/page404.component';
import { ServerIsDownComponent } from './server-is-down/server-is-down.component';
import { GetCustCouponByPriceComponent } from './components/customer/get-cust-coupon-by-price/get-cust-coupon-by-price.component';



const routes: Routes = [
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
  {path:"login",component:LoginComponent},
  {path:"home", component: MainComponent ,children: [
    {
      path:"",
      component:CouponStoreComponent
    },
 
  {
    path:"electronics",
    component:ElectronicsComponent
  },
  {
    path:"food",
    component:FoodComponent
  },
  {
    path:"spa",
    component:SpaComponent
   },
   {
    path:"sport",
    component:SportComponent
   },
   {
    path:"vacation",
    component:VacationComponent
   },
    {path:"**",component:Page404Component,pathMatch:"full"}
    //  }
  ]},
  {path:"company" ,component:CompanyComponent ,children: [ 
    
    {
       path:"",
       component:CompanyMainPageComponent
     },
     {
     path: 'createCoupon',
     component:  CreateCouponComponent
   },
    {
   path:'getAllCoupons',
    component: GetAllCouponsComponent
  },
  {
    path:'viewAllOfYourCouponsByType',
    component:GetCouponsByCategoryComponent
  },
  {
    path:'getAllCouponsByPrice',
    component:GetAllCouponsByPriceComponent
  },
  {
    path:'viewAllOfYourCouponsByDate',
    component:GetCouponsByDateComponent
  },{
    path:"**",
    component:CompanyMainPageComponent
  }
 ]},
   {path:"admin",component:AdminComponent,children: [
    {
      path:"",
      component:AdminMainPageComponent
    },
  
    
     {
     path: 'createCompany',
     component:CreateCompanyComponent
  },
  {
  path:'getAllCompanies',
    component:GetAllCompanyComponent
  },
  {
  path: 'createCustomer',
     component:  AddCustomerComponent
   },
    {
   path:'getAllCustomer',
    component:GetAllCustomersComponent
  },
    {
  path:"**",
     component:AdminMainPageComponent
   }
 ]},
{path:"customer",component:CustomerComponent,children: [
  {
    path:"",
    component:CustomerMainComponent
  },
  {
  path: 'viewAllCoupons',
  component:  GetAllCouponsCustComponent
},
{
  path:'getAllCouponsByPrice',
  component:GetCustCouponByPriceComponent
},
{ 
   path: 'CouponStoreElectronics',
 component:  ElectronicsComponent}
 ,{
   path: 'CouponStoreFood',
 component:  FoodComponent}
 ,{
  path: 'CouponStoreSpa',
component:  SpaComponent}
,{
  path: 'CouponStoreSport',
component:  SportComponent}
,{
  path: 'CouponStoreVacation',
component:  VacationComponent}

   ,{
   path:"**",
   component:CustomerMainComponent}
 ]},
   {path:"404",component:Page404Component},{path:"serverIsDown",component:ServerIsDownComponent},
   {path:"**",component:Page404Component,pathMatch:"full"},
  
  
  
                        //  ];

// ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
