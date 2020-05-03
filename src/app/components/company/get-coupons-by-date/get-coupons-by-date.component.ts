import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-coupons-by-date',
  templateUrl: './get-coupons-by-date.component.html',
  styleUrls: ['./get-coupons-by-date.component.css']
})
export class GetCouponsByDateComponent implements OnInit {
endDate:Date
  public coupon:Coupon = new Coupon(0,null,null,null,this.endDate,0,null,0,null,null);

  public companyCoupons:Coupon[]; 
  public erorr:string[] = [];
  
  


  constructor(private companyService:CompanyService ,private router:Router) { }

  ngOnInit() {

  }

  public showCoupons(){
    
    this.companyService.getCouponByEndDate(localStorage.getItem("myToken"),this.coupon.endDate).subscribe(c=>{  
      console.log(this.coupon.endDate)
     console.log(c)
      this.companyCoupons = c;
    }, err => {
      if(err.error.status == 401){
        alert("you are not logged in !");
        this.router.navigate(['login']);
      }
      console.log(err.error)
      if( err.error.messages.find( (x: string) => x.includes("option",5)  ))  {
        this.erorr.push("You have to Choose a Date")
      } 
      if( err.error.messages.find( (x: string) => x.includes("date base validation - no coupons with")  ))  {
        this.erorr.push("no coupons with a expertion date prior to this - " + this.coupon.endDate + " ,for this company" )
      } 
      console.log(err.error)
      alert(this.erorr)
      
      this.erorr.splice(0,this.erorr.length)
    })
  }

}

