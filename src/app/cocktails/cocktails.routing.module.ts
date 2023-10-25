import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CocktailsComponent} from "./cocktails.component";
import {CocktailComponent} from "./cocktail/cocktail.component";
import {APPROUTES} from "../shared/constants/app-routes";

const routes: Routes = [
  {
    path: APPROUTES.cocktails, title: 'Cocktails', component: CocktailsComponent,
    children: [{
      path: APPROUTES.cocktails + '/:idDrink', title: 'Cocktail', component: CocktailComponent
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailsRoutingModule {
}
