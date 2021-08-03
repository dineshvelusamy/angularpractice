import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  loginStatus: string;
  @Input()
  headerContent: string;
  @Output()
  loginStatusChanged = new EventEmitter<string>();
  constructor(public routerSvc:Router) {

    this.userName = "Enter User Name Here";
    this.password = "Enter Password Here";
    this.loginStatus = "Unknown";
    this.headerContent = "default header";
  }

  ngOnInit(): void {
  }
  onLogin() {
    console.log(`OnLogin Clicked ${this.userName},${this.password}`);
    if (this.userName == "tom" && this.password == "tom@123") {
      this.loginStatus = "Valid";
      //Activate route state..
      this.routerSvc.navigate(['/navbar', this.userName]);
    }
    else {
      this.loginStatus = "Invalid";
    }
    //Emit an Event
    // this.loginStatusChanged.emit(this.loginStatus);
  }
  onClear() {
    this.loginStatus = "";
    this.userName = "";
    this.password = "";
  }

}
