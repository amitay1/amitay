import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company/company.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {
  public erorr:string[] = [];
  company:Company
  
  constructor(private companyService:CompanyService, private router:Router ) { }
  public coupon:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,this.company);
  public companyCoupons:Coupon[]; 
  companyid:number;
  
  ngOnInit() {
    this.companyService.getCompanyD(localStorage.getItem("myToken")).subscribe(comp=>{
      this.company = comp
   
    },err=>{
      alert('not good')
    })
    
  
  this.companyService.getAllCoupons(localStorage.getItem("myToken")).subscribe(c=>{      
    console.log(this.company)  
    console.log(c)     
    this.companyCoupons = c;
    this.companyCoupons.forEach(coup => {
      if (c.length !== 0 && c) {
        this.companyCoupons = c;
      }
 
    });
      
    }, err => {
      if(err.error.status == 401){
        alert("you are not logged in !");
        this.router.navigate(['login']);
      }
    
    })
  
  
  }
  public showCoupon(coupon:Coupon){
console.log(this.company)
    this.coupon = coupon;

  }

  public deleteCoupon(couponId:number){
    this.companyService.deleteCouponById(localStorage.getItem("myToken"),this.coupon.id).subscribe(() => {
     
      // this.router.navigate(["comapny"]);
      let index = 0;
      for (let i = 0; i < this.companyCoupons.length; i++) {
       if(this.companyCoupons[i].id == this.coupon.id){
         index = i ;
         break;
       }
        
      }
     this.companyCoupons.splice(index,1);
   
   
   
    }, err => {
        
    
      
      alert(err.error);

    })

  }


  public updateCoupon(){
    this.companyService.updateCoupon(localStorage.getItem("myToken"),this.coupon).subscribe(c=>{
      alert("secsess")
      console.log(c)
    } , err => {
    
      alert(err.error);
    })
  }




}


