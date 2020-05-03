import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompileTokenMetadata } from '@angular/compiler';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MainLoginService } from 'src/app/services/login/main-login.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(public adminS:AdminService , public router:Router , private loginS:MainLoginService ) { }
  public erorr:string[] = [];
  token:String;
  public loginC:LoginComponent;
 public company:Company = new Company(0,null,null,null);
  ngOnInit() {
  }

  public createCompany(){
   this.adminS.createCompany( localStorage.getItem("myToken"), this.company ).subscribe((res)=>{
      console.log(res)
  alert("company created" + this.company)
    }, err=>{
alert(err);
console.log(err)
   });

 
 
 
 
 
  }



}


