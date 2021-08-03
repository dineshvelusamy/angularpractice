import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugsRoutingModule } from './bugs-routing.module';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    BugsRoutingModule
  ]
})
export class BugsModule { }
