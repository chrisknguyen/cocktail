import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DestinationRoutingModule} from './destination-routing.module';
import {DestinationComponent} from './destination.component';
import {MapModule} from "../../map/map.module";
import {TabsModule} from "ngx-bootstrap/tabs";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DestinationComponent
  ],
    imports: [
        CommonModule,
        DestinationRoutingModule,
        MapModule,
        TabsModule,
        FormsModule,
    ]
})
export class DestinationModule { }
