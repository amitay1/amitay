import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { MainLoginService } from 'src/app/services/login/main-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public couponList:Coupon[];
  constructor(private loginS:MainLoginService, private router:Router) { }

  ngOnInit() {
  }

}
