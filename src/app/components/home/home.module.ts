import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CocktailService } from 'src/app/common/services/cocktail.service';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CocktailService]
})
export class HomeModule { }
