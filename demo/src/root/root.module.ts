import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HeaderComponent } from "./header.component";
import {MainComponent} from "./main.component";
import { FooterComponent } from "./footer.component";
import { AccountsModule } from "src/accounts/accounts.module";
import { CommunicateModule } from "src/communicate/communicate.module";
import { RootRoutingModule } from "./root-routing.module";
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavBarRouteDeactivateGuard } from "./routeGuards/navBarRouteDeactivateGuard";

@NgModule({
    declarations:[HeaderComponent, MainComponent, FooterComponent, HomeComponent, AppComponent, NavbarComponent],
    imports:[BrowserModule, AccountsModule, CommunicateModule, RootRoutingModule],
    bootstrap:[AppComponent],
    providers:[NavBarRouteDeactivateGuard]
})
export class RootModule {

}