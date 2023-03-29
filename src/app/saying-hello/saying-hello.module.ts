import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SayingHelloRoutingModule } from './saying-hello-routing.module';
import { SayingHelloComponent } from './saying-hello.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SayingHelloComponent
  ],
  imports: [
    CommonModule,
    SayingHelloRoutingModule,
    ReactiveFormsModule
  ]
})
export class SayingHelloModule {
}
