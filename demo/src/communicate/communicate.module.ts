import { Inject, NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponentComponent } from './acomponent/acomponent.component';
import { BComponentComponent } from './bcomponent/bcomponent.component';
import { FormsModule } from '@angular/forms';
import { CommunicatorService } from './CommunicatorService.service';
import { APIService } from './APIService.service';

@NgModule({
  declarations: [
    AComponentComponent,
    BComponentComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [AComponentComponent, BComponentComponent],
  providers: [{ provide: "commSvc", useClass: CommunicatorService },
              APIService,
              {provide:"APIAddress", useValue:"https://siemeens.com/update"}
              ]
  // providers: [CommunicatorService]
})
export class CommunicateModule implements OnDestroy {

  constructor(public apiSvc: APIService) {

  }
  ngOnDestroy(): void {
    this.apiSvc.removeSubscription();
  }

 }
