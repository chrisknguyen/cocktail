import {Component, OnInit} from '@angular/core';
import {FacadeService} from "../shared/services/facade.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  searchText: string = 'bourbon';
  cocktails: Array<any>;
  navbarItems: Array<any>;

  constructor(private facadeService: FacadeService) {
  }

  ngOnInit() {
    this.setupNavbar();
    this.search();
  }

  setupNavbar() {
    this.navbarItems = this.facadeService.navbar.getNavbar();
  }

  search(): void {
    this.facadeService.cocktail.getCocktailsByIngredientName(this.searchText);
  }

  goTo(path: string) {
    console.log('goTo() path: ', path);
    // this.facadeService.router.navigate([path]);
  }
}
