import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { RecoverpassComponent } from './recoverpass/recoverpass.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetpassComponent,
    RecoverpassComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[LoginComponent,
    SignupComponent,
    ResetpassComponent,
    RecoverpassComponent]
})
export class AccountsModule { }
