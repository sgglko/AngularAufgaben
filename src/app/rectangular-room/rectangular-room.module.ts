import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RectangularRoomRoutingModule } from './rectangular-room-routing.module';
import { RectangularRoomComponent } from './rectangular-room.component';


@NgModule({
  declarations: [
    RectangularRoomComponent
  ],
  imports: [
    CommonModule,
    RectangularRoomRoutingModule
  ]
})
export class RectangularRoomModule { }
