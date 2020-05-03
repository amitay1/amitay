import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Coupon } from 'src/app/models/coupon';
import { CategoryType } from 'src/app/models/category-type.enum';
import { Router } from '@angular/router';
import { MainLoginService } from 'src/app/services/login/main-login.service';

@Component({
  selector: 'app-get-all-company',
  templateUrl: './get-all-company.component.html',
  styleUrls: ['./get-all-company.component.css']
})
export class GetAllCompanyComponent implements OnInit {
  public company:Company = new Company(0,null,null,null);
  public companies: Company[];
  public companyCoupons: Coupon[];
  category:CategoryType;
  public coupon:Coupon = new Coupon(0,null,null,null,null,0,null,0,null,null);
  public erorr:string[] = [];
  public companyId:number = 0;

  constructor( private adminS:AdminService, private router:Router , private loginS:MainLoginService) { }

  ngOnInit() { 
    this.adminS.getAllCompanies(localStorage.getItem("myToken")).subscribe(res=>{
    this.companies = res;
  },err=>{
 
      alert(err.error)
    
    
  })
  
  }




  public showCompanyCoupons(n:number){
    console.log(n)
    alert(n)
    this.adminS.getAllCompnaiesCoupons(localStorage.getItem("myToken"),n).subscribe(res=>{
      this.companyCoupons = res;
    },err => {
      if(err.error.messages.find( () =>  "no coupons for this company")){
        alert("no coupons for this company")
      } else {
      alert(err.error.messages)}
    })
  }


  public showCompany(company : Company){
   
    this.company = company;
  }

  public updateCompany(){
    this.adminS.updateCompany(localStorage.getItem("myToken"),this.company).subscribe(c=>{
      alert("Company:"+" "+ c +" "+"Update Successful")
      this.router.navigate(['/admin'])
    }, err => {
      if( err.error.messages.find( (x: string) => x.includes("updateCompany.company.email: must be a well-formed email address")  ))  {
        this.erorr.push("one or more values you enter was not valide.  ")
        this.erorr.push(" Email -  must be a well-formed email address")
        
      } 
      if( err.error.messages.find( (x: string) => x.includes("Password size must be between 0 and 25")  ))  {
        this.erorr.push("Password size must be between 0 and 25 . yours is " + this.company.password.length )
      }
           console.log(err.error.messages)
      alert(this.erorr)
      
      this.erorr.splice(0,this.erorr.length);

      this.router.navigate(['/admin'])
    });
  }

public deleteCompany(){
  this.adminS.deleteCompany(localStorage.getItem("myToken"),this.company.id).subscribe(c=>{
    alert("Company With ID:"+ c +"Deleted")
 let index = 0;
 for (let i = 0; i < this.companies.length; i++) {
  if(this.companies[i].id == this.company.id){
    index = i ;
    break;
  }
   
 }
this.companies.splice(index,1);

  },err=>{
    console.log(err)
    alert("not good")
    
  })
}

}

