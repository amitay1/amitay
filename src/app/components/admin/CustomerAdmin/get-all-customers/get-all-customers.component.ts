import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Coupon } from 'src/app/models/coupon';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Router } from '@angular/router';
import { MainLoginService } from 'src/app/services/login/main-login.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {
  public customer:Customer = new Customer(0,null,null,null,null)
  public customers: Customer[];
  public customerCoupons: Coupon[];
  constructor(private adminS:AdminService, private router:Router , private loginS:MainLoginService) { }

  ngOnInit() {
   
    this.adminS.getAllCustomers(localStorage.getItem("myToken")).subscribe(c=>{
      this.customers = c;
    },err => {
      if(err.error.status == 401){
        alert("you are not logged in !");
        this.router.navigate(['login']);}
        else{
          if(err.error.messages.find( () =>  "no customer at the moment")){
            alert("no customer at the moment")
          }else{
            alert(err.error.messages)
          }    }})
  }
 
  public showCustomerCoupons(n:number){
    console.log(n)
    this.adminS.getAllCustomersCoupons(localStorage.getItem("myToken"),n).subscribe(c=>{
      console.log(c)
      this.customerCoupons = c;
    },err => { if(err.error.messages.find( () =>  "no coupons for this customer")){
      alert("no coupons for this customer")
    } else {
    alert(err.error.messages)}
  })
  }


  public showCustomer(customer : Customer){
   
    this.customer = customer;
    console.log(this.customer)
  }

  
  public deleteCustomer(){
    this.adminS.deleteCustomer(localStorage.getItem("myToken"),this.customer.id).subscribe( c => {
     console.log(c)
      alert("Successful In Deleting ")
      this.router.navigate(['/admin/getAllCustomer'])
    }, err => {
      alert(err)
      console.log("not good")
    })
  }

  public updateCustomer(){
    this.adminS.updateCustomer(localStorage.getItem("myToken"),this.customer).subscribe(c=>{
      alert("Customer Updated")
    }, err => {
      if(err.error.messages.find( () =>  "updateCustomer.customer.password")){
        alert("Password size must be between 0 and 15 yours was " + this.customer.password.length)

        this.router.navigate(['/admin/getAllCustomer'])
      } else{
      alert(err.error.messages)   }
    });
  }




}
