import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarModule} from 'src/app/navbar/navbar.module';
import {FooterModule} from 'src/app/footer/footer.module';
import {HomeModule} from 'src/app/home/home.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginModule} from 'src/app/login/login.module';
import {HttpClientModule} from '@angular/common/http';
import {GoogleMapsModule} from "@angular/google-maps";
import {DestinationsModule} from "./destinations/destinations.module";
import {CountriesModule} from "./countries/countries.module";
import {DestinationModule} from "./destinations/destination/destination.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    DestinationsModule,
    DestinationModule,
    LoginModule,
    CountriesModule,
    FooterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GoogleMapsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
