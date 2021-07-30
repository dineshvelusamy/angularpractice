import { Component } from "@angular/core";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})
export class MainComponent {

    loginStatus :string;
    signupStatus:string;
    signedUserData:any;
    constructor() {
        this.loginStatus="Unknown";
        this.signupStatus="Unknown";
        this.signedUserData={};
    }
    onLoginStatusChanged(status:string) {
        this.loginStatus=status;
    }

    onSignUpStatusChanged(status:string) {
        this.signupStatus=status;
    }

    onSignedUserDataChanged(status:any) {
        this.signedUserData = status;
    }

}