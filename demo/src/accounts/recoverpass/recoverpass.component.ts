import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recover-pass-comp',
  templateUrl: './recoverpass.component.html',
  styleUrls: ['./recoverpass.component.css']
})
export class RecoverpassComponent implements OnInit {

  recoveryEmail: string;
  recoverPassStatus: string;
  
  constructor() {

    this.recoveryEmail = "Enter your Email here";
    this.recoverPassStatus = "";
  }

  ngOnInit(): void {
  }
  onPasswordRecovery(recoverPassForm : any) {
    // console.log(`OnLogin Clicked ${this.userName},${this.password}`);
    if (recoverPassForm.form.status="VALID") {
      this.recoverPassStatus = "Password reset mail sent successfully";
    }
    else {
      this.recoverPassStatus = "Error : Invalid email";
    }
  }
  onClear(recoverPassForm : any) {
    recoverPassForm.resetForm();
    this.recoverPassStatus = "";
  }

}
