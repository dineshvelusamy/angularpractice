import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "src/accounts/login/login.component";
import { RecoverpassComponent } from "src/accounts/recoverpass/recoverpass.component";
import { ResetpassComponent } from "src/accounts/resetpass/resetpass.component";
import { SignupComponent } from "src/accounts/signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavBarRouteDeactivateGuard } from "./routeGuards/navBarRouteDeactivateGuard";

//Create route configuration
const appRoutes:Routes=[
    {path:"", redirectTo:"home", pathMatch:'full'},
    {path:"navbar/:userName", component:NavbarComponent, canDeactivate:[NavBarRouteDeactivateGuard]},
    {path:"home", component:HomeComponent, children:[
        {path:"login", component:LoginComponent},
        {path:"signup", component:SignupComponent},
        {path:"resetpassword", component:ResetpassComponent},
        {path:"recoverpassword", component:RecoverpassComponent}
    ]},
    {path:"bugs", loadChildren: ()=>import('../bugs/bugs.module').then(m=>m.BugsModule)}
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class RootRoutingModule {

}