import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CocktailsRoutingModule} from './cocktails.routing.module';
import {CocktailsComponent} from './cocktails.component';
import {CocktailModule} from "./cocktail/cocktail.module";


@NgModule({
  declarations: [
    CocktailsComponent
  ],
  exports: [
    CocktailsComponent
  ],
  imports: [
    CommonModule,
    CocktailsRoutingModule,
    CocktailModule
  ]
})
export class CocktailsModule { }
