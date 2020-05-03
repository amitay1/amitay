import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MainLoginService } from 'src/app/services/login/main-login.service';
import { LoginInfo } from 'src/app/models/login-info';
import { LoginComponent } from '../../login/login.component';
import { CompanyService } from 'src/app/services/company/company.service';
import { Company } from 'src/app/models/company';
import { UserType } from 'src/app/models/user-type.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
 
  public loginBtn:string = "login";
   myUser:string 
  public logOutBtn:string = "Log Out";
public mytoken:string;
  public login:boolean = false ;
  public company:Company = new Company(0,null,null,null);
  // public loggedUser:LoginInfo = new LoginInfo(null,null,null);
  name:string
  token:String;
  email:String;
  password:String;
  type:UserType;
  
  constructor(
    private loginS: MainLoginService,
    private router: Router,
    private companyService:CompanyService
    ) {
    }
    
    
    ngOnInit() {
      // this.type = this.loginS.type1
    console.log(this.type)
    
  }
  
  public allCoupons(){
    if(this.loginS.type1 == 'Administrator'  ){
      this.router.navigate(['admin'])
     
      alert("You Are Not A Customer")}
else if(this.loginS.type1 == 'Company'){
this.router.navigate(['company'])
alert("You Are Not A Customer")}
if(this.loginS.type1 == 'Customer')
this.router.navigate(['home'])
  }
  
  
  public logginOut(){
    this.loginS.Logout(localStorage.getItem("myToken")).subscribe(() =>{
     console.log("secsess")      
    localStorage.removeItem("myToken")
    localStorage.removeItem("myUser")
},err =>{    
      alert(err.error.messages)
    })
}

}
