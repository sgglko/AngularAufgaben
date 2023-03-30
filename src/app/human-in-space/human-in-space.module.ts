import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanInSpaceRoutingModule } from './human-in-space-routing.module';
import { HumanInSpaceComponent } from './human-in-space.component';


@NgModule({
  declarations: [
    HumanInSpaceComponent
  ],
  imports: [
    CommonModule,
    HumanInSpaceRoutingModule
  ]
})
export class HumanInSpaceModule { }
