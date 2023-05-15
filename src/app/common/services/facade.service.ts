import { Injectable, Injector } from '@angular/core';
import { CocktailService } from 'src/app/common/services/cocktail.service';
import { NavbarService } from '@common/services/navbar.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class FacadeService {
  private _cocktail: CocktailService;
  private _navbar: NavbarService;
  private _router: Router;

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

}
