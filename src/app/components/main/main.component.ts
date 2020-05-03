import { Component, OnInit } from '@angular/core';
import { LoginInfo } from 'src/app/models/login-info';
import { Router } from '@angular/router';
import { MainLoginService } from 'src/app/services/login/main-login.service';
import { UserType } from 'src/app/models/user-type.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public loggeduser:LoginInfo;

  constructor(private router:Router, private loginS:MainLoginService) { }

  ngOnInit() {
  

}



  public goToPersonalErea(){
    switch(this.loginS.type1){
      case UserType.ADMIN:      
      this.router.navigate(["admin"]);       
      break;
   
      case UserType.COMPANY:      
      this.router.navigate(["company"]);
        break;
       
        case UserType.CUSTOMER:       
          this.router.navigate(["customer"]);
        break;
        
        default:
        this.router.navigate(["login"]);
   break;
      } 
  }

}
