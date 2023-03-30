import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RectangularRoomRoutingModule } from './rectangular-room-routing.module';
import { RectangularRoomComponent } from './rectangular-room.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RectangularRoomComponent
  ],
  imports: [
    CommonModule,
    RectangularRoomRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class RectangularRoomModule { }
