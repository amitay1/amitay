import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company/company.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-get-coupons-by-category',
  templateUrl: './get-coupons-by-category.component.html',
  styleUrls: ['./get-coupons-by-category.component.css']
})
export class GetCouponsByCategoryComponent implements OnInit {
  public coupon:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null);
  public company:Company = new Company(0,null,null,null);
  public companyCoupons:Coupon[]; 
 
  public erorr:string[] = [];

  constructor(private companyService:CompanyService ,private router:Router) { }

  ngOnInit() {
    this.getCompany()
  }

  public showCoupons(){
    this.companyService.getCouponByType(localStorage.getItem("myToken"),this.coupon.category).subscribe(c=>{  
      console.log(c)
      this.companyCoupons = c;
    }, err => {
      if(err.error.status == 401){
        alert("you are not logged in !");
        this.router.navigate(['login']);
      } 

      if( err.error.messages.find( (x: string) => x.includes("you have to choose a type")  ))  {
        this.erorr.push(" you have to choose a type")
      } 
      
      if( err.error.messages.find( (x: string) => x.includes("no coupons with this type")  ))  {
        this.erorr.push("no coupons with this type")
      }  
      alert(this.erorr)
      this.erorr.splice(0,this.erorr.length);
    })
  }

  public showCoupon(coupon:Coupon){

    this.coupon = coupon;

  }


  public deleteCoupon(couponId:number){
    alert(couponId)
    this.companyService.deleteCouponById(localStorage.getItem("myToken"),couponId).subscribe(() => {
      alert("secsses")
      this.router.navigate(["comapnyPersonalArea"]);
    }, err => {
      alert(err.error.messages);
    })

  }


  public updateCoupon(){
    this.companyService.updateCoupon(localStorage.getItem("myToken"),this.coupon).subscribe(c=>{
      alert("secsess")
    } , err => {
      alert(err.error.messages);
    })
  }

  public  getCompany() {
    this.companyService.getCompanyD(localStorage.getItem("myToken")).subscribe(c=>{
     this.company = c
  
  },err=>{
  alert('not good')
    })
  }




}
