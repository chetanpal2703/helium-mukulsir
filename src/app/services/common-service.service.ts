import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private authToken: string;
  // loginInfo:any;
  private apiUrl = 'https://campmanagementapidev.tsoft.co.in/v1/web_urls/web_login/';
  constructor(private http:HttpClient) { 
    
  }
  login(email:string,password:string):Observable<any>{
    const loginData = { email, password };
    return this.http.post(this.apiUrl,loginData).pipe(tap((responce)=>{
      console.log("responce",responce.data);
      localStorage.setItem('userInfo',JSON.stringify(responce.data));
      // this.loginInfo.setItem(responce.data.access_token)
      const token = responce.data.access_token;
      console.log("token",token);
      localStorage.setItem('authToken',token);
      this.setAuthToken(token);
    }));
  }
  setAuthToken(token: string) {
    this.authToken = token;
  }
  getAuthToken() {
    return this.authToken;
  }
  isAuthenticated(): boolean {

    let testToken = localStorage.getItem('authToken');
    console.log(testToken);
    console.log(this.authToken);
    this.authToken = testToken;
    return !!this.authToken;
  }
  getDashBoardData(){
    return this.http.get('https://campmanagementapidev.tsoft.co.in/v1/web_urls/dashboard/');
  }

  
  getSubAdminList(page: number, rolesId: number, createdBy: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('roles_id', rolesId.toString())
      .set('created_by', createdBy);
      
    return this.http.get('https://campmanagementapidev.tsoft.co.in/v1/web_user_management/get_user_list', { params });
  }
  // getRegistrationStaff(page: number, rolesId: number, createdBy: string): Observable<any>{
  //   const params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('roles_id', rolesId.toString())
  //     .set('created_by', createdBy);
  //   return this.http.get('https://campmanagementapidev.tsoft.co.in/v1/web_user_management/get_user_list', { params });
  // }
  
}
