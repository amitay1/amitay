import { Injectable } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  private andString = '&';

  constructor(private http: HttpClient) { }

 // Customer URL
 
 private buyCouponUrl = 'http://localhost:8080/customer/coupon/';
 private getAllAvailableCouponsUrl = 'http://localhost:8080/customer/coupon/getAll/';
 private getAllPurchasedCouponsUrl = 'http://localhost:8080/customer/coupon/';
 private getCouponByPriceUrl = ' http://localhost:8080/customer/coupon/maxprice/';
 private getCouponByDateUrl = 'http://localhost:8080/customer/';
 private couponIdString = 'couponId=';

 // Customer Methods
buyCoupon(token: string, coupon:Coupon) {
  const url = this.buyCouponUrl + token;
  return this.http.post<Coupon>(url,coupon,{responseType: 'json' });
}

getAllAvailableCoupons(token: string):Observable<Coupon[]> {
  const url = this.getAllAvailableCouponsUrl + token;
  return this.http.get<Coupon[]>(url);
}

getAllPurchasedCoupons(token: string) {
  const url = this.getAllPurchasedCouponsUrl + token;
  return this.http.get<Coupon[]>(url);
}

getCouponByPrice(token: string, price: number) {
  const url = this.getCouponByPriceUrl + token  +"/"+ price;
  return this.http.get<Coupon[]>(url);
}

getCouponByDate(token: string, date: string) {
  const url = this.getCouponByDateUrl + token +  date;
  return this.http.get<Coupon[]>(url, { observe: 'response', responseType: 'json' });
}



}
