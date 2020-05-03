import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Router } from '@angular/router';
import { CouponCategoryService } from 'src/app/services/coupon-category.service';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.css']
})
export class SpaComponent implements OnInit {
  public coupon:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null);
  public coupons2:Coupon[];
  public coupons:Coupon[];
  public type:string = "Spa";
  public erorr:string[] = [];
  constructor(private router:Router ,private customerService:CustomerService,private cateS:CouponCategoryService) { }

  ngOnInit() {
    this.cateS.getAllCouponsWhereTypeIsSpa().subscribe(c=>{
      this.coupons = c;
      console.log(c);
     
    })
      }
      public showCoupon(coupon:Coupon){
    
        this.coupon = coupon;
    
      }
      public PurchaseCoupon(){
          this.customerService.buyCoupon(localStorage.getItem("myToken"),this.coupon).subscribe(c=>{
            
            alert("coupon Purchesd")
          }, err => {
            alert(err.error)    
   
    })
          
          
            
      }

}
