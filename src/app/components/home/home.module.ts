import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {CocktailsModule} from "@components/cocktails/cocktails.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        CocktailsModule
    ]
})
export class HomeModule { }
