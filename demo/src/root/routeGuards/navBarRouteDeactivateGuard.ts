import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { NavbarComponent } from "../navbar/navbar.component";

@Injectable()
export class NavBarRouteDeactivateGuard implements CanDeactivate<NavbarComponent>{
    canDeactivate(component: NavbarComponent) {
        return window.confirm(`Hi ${component.userName}, Do you want to continue?`);
    }

}