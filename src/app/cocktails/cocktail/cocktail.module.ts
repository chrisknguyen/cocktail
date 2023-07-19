import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailComponent } from './cocktail.component';
import { CocktailRoutingModule } from './cocktail-routing.module';



@NgModule({
  declarations: [
    CocktailComponent
  ],
  imports: [
    CommonModule,
    CocktailRoutingModule
  ]
})
export class CocktailModule { }
