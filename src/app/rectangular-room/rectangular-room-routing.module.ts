import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectangularRoomComponent } from './rectangular-room.component';

const routes: Routes = [{ path: '', component: RectangularRoomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RectangularRoomRoutingModule { }
