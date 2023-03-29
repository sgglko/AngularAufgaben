import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountingCharactersRoutingModule } from './counting-characters-routing.module';
import { CountingCharactersComponent } from './counting-characters.component';


@NgModule({
  declarations: [
    CountingCharactersComponent
  ],
  imports: [
    CommonModule,
    CountingCharactersRoutingModule
  ]
})
export class CountingCharactersModule { }
