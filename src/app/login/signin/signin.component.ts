import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  errorMsg: string;
  constructor( private route:Router,private commonservice:CommonServiceService){
    // debugger
  }
  loginData: any;
  formData = {
    email: '',
    password: ''
  };


  onSubmit(loginForm: NgForm) {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
    //making post request
    this.commonservice.login(this.formData.email,this.formData.password).subscribe((responce)=>{
      console.log(responce,"hey data is returned from commonservice");
      if(responce.status){
        console.log("inside this just before navigating")
        
        this.route.navigate(['/user/dashboard']);
      }
      else{
        this.errorMsg = 'please provide correct cred!!';
        alert(this.errorMsg);
      }
    })
    
    // this.authService.login(this.formData.email, this.formData.password).subscribe(
    //   (response) => {
    //     //console.log('Post request successful:', response);
    //     this.loginData = response.data;
        
    //     console.log("logindata",this.loginData);
    //     this.userInfoOnLocalStorage=this.loginData;
    //     localStorage.setItem('userInfo',JSON.stringify(this.userInfoOnLocalStorage));
    //     console.log(this.loginData.access_token);
    //     if(response.status){
    //       debugger
    //       // localStorage.setItem('')
    //       this.route.navigateByUrl('/user');
    //       // this.loginservice.getUserList(1, 2, 'admin').subscribe(
    //       //   (response) => {
    //       //     console.log(response);
    //       //   },
    //       //   (error) => {
    //       //     console.error(error);
    //       //   }
    //       // );
    //     }else{
    //       this.errorMsg = 'please provide correct cred!!';
    //       alert(this.errorMsg);
    //     }
    //   },
    //   (error) => {
    //     console.error('Post request failed:', error);
    //     // Handle error
    //   }
    // );
    


  }

}
