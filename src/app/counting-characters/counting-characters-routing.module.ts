import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountingCharactersComponent } from './counting-characters.component';

const routes: Routes = [{ path: '', component: CountingCharactersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountingCharactersRoutingModule { }
