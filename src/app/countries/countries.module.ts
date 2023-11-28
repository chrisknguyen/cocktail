import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CountriesRoutingModule} from './countries-routing.module';
import {CountriesComponent} from './countries.component';
import {CountryModule} from "./cocktail/country.module";


@NgModule({
  declarations: [
    CountriesComponent
  ],
  exports: [
    CountriesComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    CountryModule
  ]
})
export class CountriesModule { }
