import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';

import { MainLoginService } from 'src/app/services/login/main-login.service';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CouponCategoryService } from 'src/app/services/coupon-category.service';

@Component({
  selector: 'app-food-show',
  templateUrl: './food-show.component.html',
  styleUrls: ['./food-show.component.css']
})
export class FoodShowComponent implements OnInit {

  public coupon:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null);
  public coupon1:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null);
  public coupons:Coupon[];
  public coupons2:Coupon[];
  public type:string = "Food";
  public erorr:string[] = [];

  constructor( loginS:MainLoginService, private router:Router ,private customerService:CustomerService,private cateS:CouponCategoryService) { }

  ngOnInit() {
  this.cateS.getAllCouponsWhereTypeIsFoodcate().subscribe(c=>{
    this.coupons2=c;
  console.log(c)
  },err=>{
    console.log(err)
  })

  }
  public showCoupon(coupon1:Coupon){
console.log(coupon1)
    this.coupon1 = coupon1;
    
    console.log(this.coupon1)
  }

  public PurchaseCoupon(){
      this.customerService.buyCoupon(localStorage.getItem("myToken"),this.coupon1).subscribe(c=>{
        
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
