import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CouponCategoryService } from 'src/app/services/coupon-category.service';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {
  public coupon:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null);
  public coupons:Coupon[];
  public type:string = "Vacation"; 

  constructor(private router:Router ,private customerService:CustomerService,private cateS:CouponCategoryService) { }

  ngOnInit() {
    this.cateS.getAllCouponsWhereTypeIsVacation().subscribe(c=>{
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
            alert(err.error)    
   
    })
            
      }

}
