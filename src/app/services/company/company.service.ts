import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from 'src/app/models/coupon';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company';
import { UserType } from 'src/app/models/user-type.enum';
import { CategoryType } from 'src/app/models/category-type.enum';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 
  private andString = '&';
  private currentToken = '';   

  constructor(private http: HttpClient) { }
// Company URL
private couponIdString = 'couponId=';
private couponNameString = 'couponName=';
private couponTypeString = 'type=';
private createCouponUrl = 'http://localhost:8080/company/coupon/';
private getCouponUrl = 'http://localhost:8080/company/getCoupon?token=';
private getCouponByTypeUrl = 'http://localhost:8080/company/coupon/category/';
private getAllCouponsUrl = 'http://localhost:8080/company/coupon/getAllCoupons/';
private updateCouponUrl = 'http://localhost:8080/company/coupon/';
private deleteCouponByNameUrl = 'http://localhost:8080/company/deleteCoupon?token=';
private deleteCouponByIdUrl = 'http://localhost:8080/company/coupon/';
private getCompanyIdUrl = 'http://localhost:8080/company/'



// Company Methods
createCoupon(token:string, coupon: Coupon) {
  const url = this.createCouponUrl + token;
  return this.http.post(url, coupon, {responseType: 'text' });
}

getCoupon(token: string, couponId: number) {
  const url = this.getCouponUrl + token + this.andString + this.couponIdString + couponId;
  return this.http.get<Coupon>(url);
}

getCouponByType(token: string, category: CategoryType) {
  const url = this.getCouponByTypeUrl + token + "/"+ category;
  return this.http.get<Coupon[]>(url);
}
getCouponByPrice(token:string , maxPrice:number){
  return this.http.get<Coupon[]>('http://localhost:8080/company/coupon/maxprice/'+token +'/'+ maxPrice);
}
getCouponByEndDate(token:string , endDate:Date){
  return this.http.get<Coupon[]>('http://localhost:8080/company/coupon/endDate/'+token +'/'+ endDate );
}

getAllCoupons(token: string):Observable<Coupon[]> {
  const url = this.getAllCouponsUrl + token;
  return this.http.get<Coupon[]>(url);
}

updateCoupon(token: string, coupon: Coupon) {
  const url = this.updateCouponUrl + token ;
  return this.http.put(url, coupon, { observe: 'response', responseType: 'json' });
}

deleteCouponByName(token: string, couponName: string) {
  const url = this.deleteCouponByNameUrl + token + this.andString + this.couponNameString + couponName;
  return this.http.delete(url, { observe: 'response', responseType: 'json' });
}

deleteCouponById(token: string, couponId: number) {
  const url = this.deleteCouponByIdUrl + token+"/"+couponId;
  return this.http.delete(url, {responseType: 'text' });
}
// public GetAllcoupons(token:string,comp:Company){
//   return this.http.get<Coupon[]>("http://localhost:8080/company/coupon/getAllCoupons/"+token+"/"+comp,{ observe: 'response',responseType: 'json'});
// }
public getCompanyD(token: string) :Observable<Company>{
  return this.http.get<Company>(this.getCompanyIdUrl + token );
}
}
