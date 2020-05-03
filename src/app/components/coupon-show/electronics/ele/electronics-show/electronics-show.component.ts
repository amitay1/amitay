import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';


import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CouponCategoryService } from 'src/app/services/coupon-category.service';
import { MainLoginService } from 'src/app/services/login/main-login.service';


@Component({
  selector: 'app-electronics-show',
  templateUrl: './electronics-show.component.html',
  styleUrls: ['./electronics-show.component.css']
})
export class ElectronicsShowComponent implements OnInit {
  public coupon:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null);
  public coupon1:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null);
  public coupons:Coupon[];
  public type:string = "Electronics";

  public erorr:string[] = [];
 

  constructor(private router:Router ,private customerService:CustomerService ,private loginS:MainLoginService,private cateS:CouponCategoryService) { }

  ngOnInit() {
   
  this.cateS.getAllCouponsWhereTypeIsElectronics().subscribe(c=>{
 
    this.coupons=c;
 console.log(c)
  },err=>{
    console.log(err)
  })
  console.log(this.coupon)
  }
  public showCoupon(coupon:Coupon){

    this.coupon = coupon;
   this.coupon1 = coupon
  
  }

  public PurchaseCoupon(){
      this.customerService.buyCoupon(localStorage.getItem("myToken"),this.coupon).subscribe(c=>{
        
        alert("coupon Purchesd")
      } ), err => {
       
        
          alert("ops" + err.error
          )
        } 
        
        
    
    



  }

}
