import { Injectable, Injector } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { NavbarService } from '../../navbar/shared/navbar.service';
import { Router } from '@angular/router';
import { UtilsService } from './utils.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class FacadeService {
  private _cocktail: CocktailService;
  private _navbar: NavbarService;
  private _router: Router;
  private _utils: UtilsService;
  private _location: Location;

  constructor(private injector: Injector) {
  }

  public get cocktail(): CocktailService {
    if (!this._cocktail) {
      this._cocktail = this.injector.get(CocktailService);
    }
    return this._cocktail;
  }

  public get navbar(): NavbarService {
    if (!this._navbar) {
      this._navbar = this.injector.get(NavbarService);
    }
    return this._navbar;
  }

  public get router(): Router {
    if (!this._router) {
      this._router = this.injector.get(Router);
    }
    return this._router;
  }

  public get utils(): UtilsService {
    if (!this._utils) {
      this._utils = this.injector.get(UtilsService);
    }
    return this._utils;
  }

  get location() {
    if (!this._location) {
      this._location = this.injector.get(Location);
    }
    return this._location;
  }

}
