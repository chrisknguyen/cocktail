import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CocktailsModule} from "../cocktails/cocktails.module";
import {MapModule} from "@common/../map/map.module";

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
    MapModule
  ]
})
export class HomeModule {
}
