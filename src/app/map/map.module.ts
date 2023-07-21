import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import {GoogleMapsModule} from "@angular/google-maps";



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
