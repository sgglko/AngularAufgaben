import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountingCharactersRoutingModule } from './counting-characters-routing.module';
import { CountingCharactersComponent } from './counting-characters.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CountingCharactersComponent
  ],
  imports: [
    CommonModule,
    CountingCharactersRoutingModule,
    ReactiveFormsModule
  ]
})
export class CountingCharactersModule { }
