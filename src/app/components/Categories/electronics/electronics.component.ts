import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { MainLoginService } from 'src/app/services/login/main-login.service';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';

import { CategoryType } from 'src/app/models/category-type.enum';
import { CouponCategoryService } from 'src/app/services/coupon-category.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  public coupon:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null);
  public coupons:Coupon[];
  public type:string = "ELECTRICITY";
  public erorr:string[] = [];

  constructor( private router:Router ,private customerService:CustomerService,private cateS:CouponCategoryService) { }

  ngOnInit() {
    this.cateS.getAllCouponsWhereTypeIsElectronics().subscribe(c=>{
  this.coupons = c;
  console.log(this.coupons);
  
})

}
  public showCoupon(coupon:Coupon){

    this.coupon = coupon;

  }
  public PurchaseCoupon(){
      this.customerService.buyCoupon(localStorage.getItem("myToken"),this.coupon).subscribe(c=>{
        
        alert("coupon Purchesd")
      }, err => {
        alert( err.error )
           
      
      })
      
        
  }
    
  }

    
    
