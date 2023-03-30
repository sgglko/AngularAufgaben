import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanInSpaceComponent } from './human-in-space.component';

const routes: Routes = [{ path: '', component: HumanInSpaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanInSpaceRoutingModule { }
