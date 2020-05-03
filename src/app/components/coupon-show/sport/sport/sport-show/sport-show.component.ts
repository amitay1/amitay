import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';

import { MainLoginService } from 'src/app/services/login/main-login.service';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CouponCategoryService } from 'src/app/services/coupon-category.service';

@Component({
  selector: 'app-sport-show',
  templateUrl: './sport-show.component.html',
  styleUrls: ['./sport-show.component.css']
})
export class SportShowComponent implements OnInit {
  public coupon:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null);
  public coupons:Coupon[];
  public type:string = "Sport";
  // public loggedUser:LoggedUser  = new LoggedUser(0,null,null,null); 
  public erorr:string[] = [];

  constructor( loginS:MainLoginService, private router:Router ,private customerService:CustomerService,private cateS:CouponCategoryService) { }

  ngOnInit() {
  this.cateS.getAllCouponsWhereTypeIsSport().subscribe(c=>{
    this.coupons=c;
    console.log(c)
  },err=>{
    console.log(err)
  })
  
  }
  public showCoupon(coupon:Coupon){

    this.coupon = coupon;

  }

  public PurchaseCoupon(){
      this.customerService.buyCoupon(localStorage.getItem("myToken"),this.coupon).subscribe(c=>{
        
        alert("coupon Purchesd")
      } , error => {
        console.log(error.error);
        
        if( error.error.messages.find( (x: string) => x.includes("you allredy have this coupon")  ))  {
          this.erorr.push("you allredy have this coupon")
          alert(this.erorr)
        } 
        
        
      })
    



  }


}
