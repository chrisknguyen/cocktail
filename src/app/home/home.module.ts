import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CocktailsModule} from "../cocktails/cocktails.module";
import {MapModule} from "@common/../map/map.module";
import {AccordionModule} from "ngx-bootstrap/accordion";

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        CocktailsModule,
        MapModule,
        AccordionModule
    ]
})
export class HomeModule {
}
