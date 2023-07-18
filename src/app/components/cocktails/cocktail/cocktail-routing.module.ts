import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CocktailComponent} from "@components/cocktails/cocktail/cocktail.component";

const routes: Routes = [
  {
    // path: '',
    path: 'cocktails/:idDrink',
    // path: 'cocktail',
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
