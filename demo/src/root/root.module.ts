import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header.component";
import {MainComponent} from "./main.component";
import { FooterComponent } from "./footer.component";
import { BrowserModule } from "@angular/platform-browser";
import { AccountsModule } from "src/accounts/accounts.module";
import { CommunicateModule } from "src/communicate/communicate.module";

@NgModule({
    declarations:[HeaderComponent, MainComponent, FooterComponent],
    imports:[BrowserModule, AccountsModule, CommunicateModule],
    bootstrap:[HeaderComponent, MainComponent, FooterComponent]
})
export class RootModule {

}