import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailsRoutingModule } from './cocktails.routing.module';
import { CocktailsComponent } from './cocktails.component';


@NgModule({
  declarations: [
    CocktailsComponent
  ],
  exports: [
    CocktailsComponent
  ],
  imports: [
    CommonModule,
    CocktailsRoutingModule
  ]
})
export class CocktailsModule { }
