import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherAppRoutingModule } from './weather-app-routing.module';
import { WeatherAppComponent } from './weather-app.component';


@NgModule({
  declarations: [
    WeatherAppComponent
  ],
  imports: [
    CommonModule,
    WeatherAppRoutingModule
  ]
})
export class WeatherAppModule { }
