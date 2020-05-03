import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CategoryType } from 'src/app/models/category-type.enum';
import { CompanyService } from 'src/app/services/company/company.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {
 
  amount: number;
  category: CategoryType;
  title: string;
  image: string;
  description: string;
  startDate: Date;
  endDate: Date;
  price: number;
 public  company: Company
   year = null;
month = null;
   day = null;
  date= null;
   erorr:string[] = [];  
  coupon:Coupon = new Coupon(0,this.title,this.startDate,this.description,this.endDate,this.amount,this.category,this.price,this.image ,this.company);
  
  constructor(private companyService:CompanyService, private router:Router ) {
   
   }

  ngOnInit() {
    this.companyService.getCompanyD(localStorage.getItem("myToken")).subscribe((c)=>{    
      this.coupon.company = c;
     
    },err=>{
   alert('not good')
    console.log(err)
  })
   
    this.year = new Date().getFullYear().valueOf()
    this.month = new Date().getMonth().valueOf()
    this.day = new Date().getDay().valueOf() + 16;
    this.date = new Date().setFullYear(this.year,this.month,this.day).valueOf()
    
  }
  
  public createCoupon(){
    console.log(this.coupon)  
    this.companyService.createCoupon(localStorage.getItem("myToken"),this.coupon).subscribe(()=>{
      alert("secsess")
    } , err => {
    alert("not good")
  
 
      if(err.error.status == 401){
        alert("you are not logged in !");
        this.router.navigate(['login']);
      }
    
      console.log(err.error.messages)
      
    if( err.error.messages.find( (x: string) => x.includes("Start Date")  ))  {
      this.erorr.push("one or more values you enter was not valide.  ")
      this.erorr.push(" Start Date -  Start Date must be a future date")
    } 
    if( err.error.messages.find( (x: string) => x.includes("createCoupon.coupon.amount:")  ))  {
      this.erorr.push(" Amount: must be greater than 0")
    } 
    if( err.error.messages.find( (x: string) => x.includes("createCoupon.coupon.price")  ))  {
      this.erorr.push(" Price: must be greater than 0")
    } 
    if( err.error.messages.find( (x: string) => x.includes("date base validation - coupon title already exist")  ))  {
      this.erorr.push("coupon title already exist :" + this.coupon.title )
    }
    if( err.error.messages.find( (x: string) => x.includes("createCoupon.coupon.type")  ))  {
      this.erorr.push("You must choose a type")
    }
    if( err.error.messages.find( (x: string) => x.includes("size must be between 0 and 25")  ))  {
      this.erorr.push("Password size must be between 0 and 25 . yours is "  )
    }else{
      alert(this.erorr)
      this.erorr.splice(0,this.erorr.length)
    }
  })
}

}