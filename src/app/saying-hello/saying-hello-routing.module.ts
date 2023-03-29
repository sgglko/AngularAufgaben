import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SayingHelloComponent } from './saying-hello.component';

const routes: Routes = [{ path: '', component: SayingHelloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SayingHelloRoutingModule { }
