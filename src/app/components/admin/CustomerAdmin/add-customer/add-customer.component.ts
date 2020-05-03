import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Router } from '@angular/router';
import { MainLoginService } from 'src/app/services/login/main-login.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  public customer:Customer = new Customer(0,null,null,null,null);
  constructor(private adminS:AdminService , private router:Router, private loginS:MainLoginService) { }

  ngOnInit() {
  }


  public createCustomer(){
    this.adminS.createCustomer(localStorage.getItem("myToken"),this.customer).subscribe(c=>{
     console.log(c)
      alert("Add customer: "+ c )
    },err=>{
      console.log(err)
      alert("not good try again")
    })
  }
}
