import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MainLoginService } from 'src/app/services/login/main-login.service';
import { UserType } from 'src/app/models/user-type.enum';
import { LoginInfo } from 'src/app/models/login-info';
import { AdminService } from 'src/app/services/admin/admin.service';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  name:string
  token:String;
  email:String;
  password:String;
  type:UserType;
  public loggedUser:LoginInfo =new LoginInfo(null,null,null);
  

  contact = {
    label: 'admin',
    comment: 'No comment',
    subscribe: true,
   
  };
  constructor(  
    private router: Router,
    private loginS : MainLoginService,
 private adminS: AdminService
    ) {
  }

  ngOnInit() {
   
    };

public loginMeth(){
  this.loginS.Login(this.email ,this.password , this.type ).subscribe(
    (res)=>{
    localStorage.myToken = res;
    //  alert("hello" +" " + this.type);
console.log(res);
localStorage.myUser = this.type
switch(this.type){
        case UserType.ADMIN:      
        this.router.navigate(["admin"]);       
        break;
     
        case UserType.COMPANY:      
        this.router.navigate(["company"]);
          break;
         
          case UserType.CUSTOMER:
         
            this.router.navigate(["customer"]);
          break;
      }
    },err=>{
      alert("not good");
    console.log(err);
    }
  );
}






  }

  
 

