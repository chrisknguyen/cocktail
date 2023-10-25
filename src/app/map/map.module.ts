import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    FormsModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
