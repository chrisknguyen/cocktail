import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CocktailsModule} from "../cocktails/cocktails.module";
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
    AccordionModule
  ]
})
export class HomeModule {
}
