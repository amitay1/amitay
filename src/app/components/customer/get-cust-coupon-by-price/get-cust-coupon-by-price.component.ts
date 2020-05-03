import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-cust-coupon-by-price',
  templateUrl: './get-cust-coupon-by-price.component.html',
  styleUrls: ['./get-cust-coupon-by-price.component.css']
})
export class GetCustCouponByPriceComponent implements OnInit {

  public coupon:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null);

  public customerCoupons:Coupon[]; 
  public erorr:string[] = [];
  public price:number;

  constructor(private customerService:CustomerService ,private router:Router) { }

  ngOnInit() {

  }

  public showCoupons(){
    this.customerService.getCouponByPrice(localStorage.getItem("myToken"),this.price).subscribe(c=>{  
      console.log(c)
      this.customerCoupons = c;
    }, err => {
      if(err.error.status == 401){
        alert("you are not logged in !");
        this.router.navigate(['login']);
      }
      
      if( err.error.messages.find( (x: string) => x.includes("option",5)  ))  {
        this.erorr.push("You have to typein a price")
      } 
      if( err.error.messages.find( (x: string) => x.includes("opps",0)  ))  {
        this.erorr.push("no coupons with a price lower then this - " + this.price + " ,for this customer" )
      } 
      console.log(err.error)
      alert(this.erorr)
      
      this.erorr.splice(0,this.erorr.length)
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
