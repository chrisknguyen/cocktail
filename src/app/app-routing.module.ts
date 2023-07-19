import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {CocktailsComponent} from "./cocktails/cocktails.component";
import {CocktailComponent} from "./cocktails/cocktail/cocktail.component";

const routes: Routes = [
  {path: 'home', title: 'Home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cocktails', component: CocktailsComponent},
  {path: 'cocktails/:idDrink', component: CocktailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
