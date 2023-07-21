import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CocktailComponent} from "./cocktail.component";

const routes: Routes = [
  {
    path: 'cocktails/:idDrink',
    component: CocktailComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CocktailRoutingModule {
}
