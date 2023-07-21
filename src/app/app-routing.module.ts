import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {CocktailsComponent} from "./cocktails/cocktails.component";
import {CocktailComponent} from "./cocktails/cocktail/cocktail.component";
import {APPROUTES} from "./shared/constants/app-routes";

const routes: Routes = [
  {path: APPROUTES.home, title: 'Home', component: HomeComponent},
  {path: APPROUTES.login, component: LoginComponent},
  {path: APPROUTES.cocktails, component: CocktailsComponent},
  {path: APPROUTES.cocktails + '/:idDrink', component: CocktailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
