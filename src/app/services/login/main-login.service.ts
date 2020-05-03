import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserType } from 'src/app/models/user-type.enum';
import { LoginInfo } from 'src/app/models/login-info';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainLoginService {
  public loginI:LoginInfo =new LoginInfo(null,null,null);
  private currentToken = '';  
email1:String
password1:String
type1:UserType
  constructor(private httpClient: HttpClient) { }
 
 public Login(email:String ,password:String,type:UserType) {
 this.email1 = email
 console.log(this.email1)
 this.password1 = password
 console.log(this.password1)
 this.type1 = type
 console.log(this.type1)
  return this.httpClient.post("http://localhost:8080/login/" + email + "/" + password + "/"+ type, null, { responseType: 'text' });

 }

public Logout(token:string){
  return this.httpClient.post("http://localhost:8080/logout/" + token,null,{ responseType: 'text' });
}







 
public getLoggduser(){
  return this.loginI;
}



public ifLoggdOut(l:LoginInfo){
  this.loginI = l;
}


public set setLoggedUser(loginI:LoginInfo){
  this.loginI = loginI;
}

}