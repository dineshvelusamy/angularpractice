import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nav-bar-app',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  userName : string;
  subscriptionRef : any;
  constructor(public routerSvc: Router, public activeRouteSvc:ActivatedRoute) {
    this.userName="Unknown";
   }
  ngOnDestroy(): void {
    this.subscriptionRef.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionRef = this.activeRouteSvc.paramMap.subscribe(p=>{
      let name = p.get('userName');
      if(name) {
        this.userName = name;
      }
    });
  }

  onLogout() {
    this.routerSvc.navigate(['/home']);
  }
}
