import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-comp',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userName: string;
  password: string;
  email: string;
  signupStatus: string;
  signupObj:any;
  @Input()
  signupHeader:string;
  @Output()
  signUpStatusChanged = new EventEmitter<string>();
  @Output()
  signedUserDataChanged = new EventEmitter<any>();

  constructor(public routerSvc:Router) {

    this.userName = "Enter UserName here";
    this.password = "Enter Password here";
    this.email = "Enter your Email here";
    this.signupStatus = "";
    this.signupHeader="Default signup header";
    this.signupObj={};
  }

  ngOnInit(): void {
  }
  // onSignUp() {
  //   // console.log(`OnLogin Clicked ${this.userName},${this.password}`);
  //   if (this.userName.length > 0 && this.password.length > 0 && this.email.length > 0) {
  //     this.signupStatus = "Signed up successfully";
  //   }
  //   else {
  //     this.signupStatus = "Error : Invalid username / password / email";
  //   }
  // }
  onSignUp(signupform: any) {
    console.log("Called onsignup");
    console.log(signupform);
    console.log(signupform.form.status);
    if(signupform.form.status=="VALID") {
      this.signupStatus="Sign up success";
    }
    else {
      this.signupStatus="Error"
    }
    this.signUpStatusChanged.emit(this.signupStatus);
    this.signupObj.userName=signupform.form.value.userName;
    this.signupObj.password=signupform.form.value.password;
    this.signupObj.email=signupform.form.value.email;
    // this.signedUserDataChanged.emit(signupform.form.value.userName + "  "+signupform.form.value.password+ "  "+signupform.form.value.email);
    // this.signedUserDataChanged.emit(this.signupObj);
    console.log(this.signupObj);

    this.routerSvc.navigate(['/navbar']);
  }

    onClear(signupform:any) {
      console.log("Called onclear");
      // this.email = "";
      // this.userName = "";
      // this.password = "";
      signupform.resetForm();
      this.signupStatus = "";
      this.signUpStatusChanged.emit(this.signupStatus);
      this.signedUserDataChanged.emit("");
    }

    // onUserNameChanged(data: string) {
    //   this.userName = data;
    // }
    // onPasswordChanged(data: string) {
    //   this.password = data;
    // }

    // onEmailChanged(data: string) {
    //   this.email = data;
    // }

  }
