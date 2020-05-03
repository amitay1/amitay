import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../models/coupon';
import { Observable } from 'rxjs';
import { CategoryType } from '../models/category-type.enum';

@Injectable({
  providedIn: 'root'
})
export class CouponCategoryService {
  
 
  constructor(private http:HttpClient) { }

  public getAllCouponsWhereTypeIsElectronics():Observable<Coupon[]>{
    const type:String = "Electronics";
    return this.http.get<Coupon[]>("http://localhost:8080/customer/coupon/category/"+localStorage.getItem("myToken")+"/"+type, {responseType: "json"})
  }

  public getAllCouponsWhereTypeIsFood():Observable<Coupon[]>{  
    const type:String = "Food";
    return this.http.get<Coupon[]>("http://localhost:8080/customer/coupon/category/"+localStorage.getItem("myToken")+"/"+type, {responseType: "json"})
  }

  public getAllCouponsWhereTypeIsSpa():Observable<Coupon[]>{   
    const type:String = "Spa";
    return this.http.get<Coupon[]>("http://localhost:8080/customer/coupon/category/"+localStorage.getItem("myToken")+"/"+type, {responseType: "json"})
  }

  public getAllCouponsWhereTypeIsSport():Observable<Coupon[]>{  
    const type:String = "Sport";
    return this.http.get<Coupon[]>("http://localhost:8080/customer/coupon/category/"+localStorage.getItem("myToken")+"/"+type, {responseType: "json"})
  }

  public getAllCouponsWhereTypeIsVacation():Observable<Coupon[]>{
    const type:String = "Vacation";
    return this.http.get<Coupon[]>("http://localhost:8080/customer/coupon/category/"+localStorage.getItem("myToken")+"/"+type, {responseType: "json"})
  }

  public getAllCouponsWhereTypeIsFoodcate():Observable<Coupon[]>{  
    const type:String = "Food";
    return this.http.get<Coupon[]>("http://localhost:8080/customer/coupon/category/"+localStorage.getItem("myToken")+"/"+type, {responseType: "json"})
  }






}
