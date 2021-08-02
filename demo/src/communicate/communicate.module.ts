import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponentComponent } from './acomponent/acomponent.component';
import { BComponentComponent } from './bcomponent/bcomponent.component';
import { FormsModule } from '@angular/forms';
import { CommunicatorService } from './CommunicatorService.service';

@NgModule({
  declarations: [
    AComponentComponent,
    BComponentComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [AComponentComponent, BComponentComponent],
  providers: [{ provide: "commSvc", useClass: CommunicatorService }]
  // providers: [CommunicatorService]
})
export class CommunicateModule { }
