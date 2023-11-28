import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CountriesModule} from "../countries/countries.module";
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
    CountriesModule,
    AccordionModule
  ]
})
export class HomeModule {
}
