import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountriesComponent} from "./countries.component";
import {CountryComponent} from "./cocktail/country.component";
import {APPROUTES} from "../shared/constants/app-routes";

const routes: Routes = [
  {
    path: APPROUTES.cocktails, title: 'Cocktails', component: CountriesComponent,
    children: [{
      path: APPROUTES.cocktails + '/:idDrink', title: 'Cocktail', component: CountryComponent
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule {
}
