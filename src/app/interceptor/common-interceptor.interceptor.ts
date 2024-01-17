import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonServiceService } from '../services/common-service.service';

@Injectable()
export class CommonInterceptorInterceptor implements HttpInterceptor {

  constructor(private commonservice:CommonServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    console.log("inside the interceptor");
    if(!request.url.includes('/login')){
      if(this.commonservice.isAuthenticated()){
        // const token=localStorage.getItem('authToken');
        // console.log(token,"token")
        // const authToken = this.commonservice.getAuthToken();
        // request=request.clone({
        //   setHeaders:{
        //     Authorization: `Bearer ${token}`,
        //   }
        // })

        let token: any = localStorage.getItem("authToken");
        const headers = new HttpHeaders({
          'Authorization': token ? `Bearer ${token}` : '',
        });
        request = request.clone({ headers })

      }
      
      
    }
    // return next.handle(newRequest)
    return next.handle(request);


    let token: any = localStorage.getItem("authToken");
    const headers = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
    });
    const newRequest = request.clone({ headers })
 
    return next.handle(newRequest)


  }
}
