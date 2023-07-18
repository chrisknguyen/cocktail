import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "@components/home/home.component";
import {LoginComponent} from "@components/login/login.component";
import {CocktailsComponent} from "@components/cocktails/cocktails.component";
import {CocktailComponent} from "@components/cocktails/cocktail/cocktail.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [RouterModule]
})
export class NavbarRoutingModule {
}
