import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reset-pass-comp',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {

  oldPassword: string;
  newPassword: string;
  newConfPassword : string;
  resetPasswordStatus : string;

  constructor() {

    this.oldPassword = "Enter your old password here";
    this.newPassword = "Enter your new password here";
    this.newConfPassword = "Enter again your new password here";
    this.resetPasswordStatus = "";
  }

  ngOnInit(): void {
  }
  onPasswordChange(resetPasswordForm : any) {
     console.log(resetPasswordForm);
     console.log(resetPasswordForm.form.value.newPassword);
    if (resetPasswordForm.form.status == "VALID" && resetPasswordForm.form.value.newPassword == resetPasswordForm.form.value.newConfPassword) {
      this.resetPasswordStatus = "Password resetted successfully";
    }
    else {
      this.resetPasswordStatus = "Error : Invalid old / new password";
    }
  }
  onClear(resetPasswordForm : any) {
    resetPasswordForm.resetForm();
    this.resetPasswordStatus = "";
  }

}
