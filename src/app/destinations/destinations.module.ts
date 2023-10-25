import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DestinationsRoutingModule} from './destinations-routing.module';
import {DestinationsComponent} from './destinations.component';
import {DestinationModule} from "./destination/destination.module";
import {MapModule} from "../map/map.module";


@NgModule({
  declarations: [
    DestinationsComponent
  ],
  imports: [
    CommonModule,
    // MapModule,
    DestinationModule,
    DestinationsRoutingModule,
  ]
})
export class DestinationsModule { }
