import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-coupons-by-price',
  templateUrl: './get-all-coupons-by-price.component.html',
  styleUrls: ['./get-all-coupons-by-price.component.css']
})
export class GetAllCouponsByPriceComponent implements OnInit {

  public coupon:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null);

  public companyCoupons:Coupon[]; 
  public erorr:string[] = [];
  public price:number;

  constructor(private companyService:CompanyService ,private router:Router) { }

  ngOnInit() {

  }

  public showCoupons(){
    this.companyService.getCouponByPrice(localStorage.getItem("myToken"),this.price).subscribe(c=>{  
      console.log(c)
      this.companyCoupons = c;
    }, err => {
          
      if( err.error.messages.find( (x: string) => x.includes("option",5)  ))  {
        this.erorr.push("You have to typein a price")
      } 
      if( err.error.messages.find( (x: string) => x.includes("opps",0)  ))  {
        this.erorr.push("no coupons with a price lower then this - " + this.price + " ,for this customer" )
      } 
     
      alert(err.error)
      
      this.erorr.splice(0,this.erorr.length)
    })
  }

}