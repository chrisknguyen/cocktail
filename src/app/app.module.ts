import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from 'src/app/common/components/navbar/navbar.module';
import { FooterModule } from 'src/app/common/components/footer/footer.module';
import { HomeModule } from 'src/app/components/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from 'src/app/components/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { CocktailModule } from '@components/cocktail/cocktail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    LoginModule,
    CocktailModule,
    FooterModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
