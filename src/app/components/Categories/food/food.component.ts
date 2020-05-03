import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CouponCategoryService } from 'src/app/services/coupon-category.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  public coupon:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null); 
  public coupons:Coupon[];
  public type:string = "Food";
  public erorr:string[] = [];
  constructor(private router:Router ,private customerService:CustomerService,private cateS:CouponCategoryService) { }

  ngOnInit() {
    this.cateS.getAllCouponsWhereTypeIsFood().subscribe(c=>{
      this.coupons = c;
     
    })
      }
      public showCoupon(coupon:Coupon){
    
        this.coupon = coupon;
    
      }
      public PurchaseCoupon(){
          this.customerService.buyCoupon(localStorage.getItem("myToken"),this.coupon).subscribe(c=>{
            
            alert("coupon Purchesd")
          } , err => {
                  alert(err.error)    
         
          })
          
            
      }

}
