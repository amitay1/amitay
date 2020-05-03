import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/models/company';
import { Customer } from 'src/app/models/customer';
import { Observable } from 'rxjs';
import { Coupon } from 'src/app/models/coupon';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private andString = '&';
  private currentToken = '';  
  constructor(private http: HttpClient) { }


// Admin URL
private companyIdString = 'companyId=';
private companyNameString = 'companyName=';
private createCompanyUrl = 'http://localhost:8080/admin/company/';
private getCompanyUrl = 'http://localhost:8080/admin/getCompany?token=';
private getAllCompaniesUrl = 'http://localhost:8080/admin/company/';
private updateCompanyUrl = 'http://localhost:8080/admin/company/';
private deleteCompanyUrl = ' http://localhost:8080/admin/company/';

private customerIdString = 'customerId=';
private customerNameString = 'customerName=';
private createCustomerUrl = 'http://localhost:8080/admin/customer/';
private getCustomerUrl = 'http://localhost:8080/admin/getCustomer?token=';
private getAllCustomersUrl = 'http://localhost:8080/admin/customer/';
private updateCustomerUrl = 'http://localhost:8080/admin/customer/';
private deleteCustomerUrl = 'http://localhost:8080/admin/customer/';


// Admin Methods
public createCompany( token: String,company: Company) {
  const url = this.createCompanyUrl+ token ;
  return this.http.post(url, company, {responseType: 'text' } );
}

getCompany(token: String, companyId: number) {
  const url = this.getCompanyUrl + token + this.andString + this.companyIdString + companyId;
  return this.http.get<Company>(url,{ observe: 'response', responseType: 'json' });
}

getAllCompanies(token: String) {
  const url = this.getAllCompaniesUrl + token;
  return this.http.get<Company[]>(url);
}
public getAllCompnaiesCoupons(token:String,companyId:number):Observable<Coupon[]>{
  return this.http.get<Coupon[]>("http://localhost:8080/admin/company/getAllCompanyCoupons/"+token+"/"+companyId,{ responseType: 'json' });
}
updateCompany(token: String, company: Company) {
  const url = this.updateCompanyUrl + token;
  return this.http.put(url, company);
}

deleteCompany(token: String, companyId: Number) {
  const url = this.deleteCompanyUrl + token + "/" + companyId;
  return this.http.delete(url, { observe: 'response', responseType: 'text' });
}

createCustomer(token: String, customer: Customer) {
  const url = this.createCustomerUrl + token;
  return this.http.post<Customer>(url, customer, {responseType: 'json' });
}

getCustomer(token: string, customerId: number) {
  const url = this.getCustomerUrl + token + this.andString + this.customerIdString + customerId;
  return this.http.get<Customer>(url, { observe: 'response', responseType: 'json' });
}

getAllCustomers(token: string) {
  const url = this.getAllCustomersUrl + token;
  return this.http.get<Customer[]>(url);
}

updateCustomer(token: string, customer: Customer) {
  const url = this.updateCustomerUrl + token ;
  return this.http.put(url, customer);
}

deleteCustomer(token: string, customerId:Number) {
  const url = this.deleteCustomerUrl + token +"/"+ customerId;
  return this.http.delete(url, { observe: 'response', responseType: 'json' });
}
public getAllCustomersCoupons(token:String,customerId:number):Observable<Coupon[]>{
  return this.http.get<Coupon[]>("http://localhost:8080/admin/customer/getAllCustomersCoupons/"+token+"/"+customerId,{ responseType: 'json' });
}



// // Local methods
// setToken(token: string) {
//   this.currentToken = token;
// }

// getToken() {
//   return this.currentToken;
// }
}
