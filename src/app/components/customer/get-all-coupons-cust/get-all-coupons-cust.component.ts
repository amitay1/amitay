import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-coupons-cust',
  templateUrl: './get-all-coupons-cust.component.html',
  styleUrls: ['./get-all-coupons-cust.component.css']
})
export class GetAllCouponsCustComponent implements OnInit {
  
  public customerCoupons:Coupon[]; 
  public erorr:string[] = [];

  constructor(private customerServise:CustomerService ,private router:Router) { }

  ngOnInit() {

    this.customerServise.getAllPurchasedCoupons(localStorage.getItem("myToken")).subscribe(c=>{    
      this.customerCoupons = c;
      console.log(c)
      console.log(this.customerCoupons)
    }, err => {
     console.log(err)
  
     
    })
  }

  

}