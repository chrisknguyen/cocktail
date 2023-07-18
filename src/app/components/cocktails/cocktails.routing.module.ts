import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CocktailsComponent} from "@components/cocktails/cocktails.component";
import {CocktailComponent} from "@components/cocktails/cocktail/cocktail.component";

const routes: Routes = [
  // {
  //   path: '', component: CocktailsComponent,
  //   children: [
  //     {path: 'cocktail/:idDrink', component: CocktailComponent}
  //   ]
  // }
  {
    path: '', component: CocktailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailsRoutingModule {
}
