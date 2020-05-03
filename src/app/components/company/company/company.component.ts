import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company/company.service';
import { Router } from '@angular/router';
import { MainLoginService } from 'src/app/services/login/main-login.service';
import { LoginInfo } from 'src/app/models/login-info';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public company:Company = new Company(0,null,null,null)
  public couponList:Coupon[];
   public company1:LoginInfo = new LoginInfo(null,null,null)
  constructor(private loginS:MainLoginService, private router:Router) { }

  ngOnInit() {
   
    }
  
  }





