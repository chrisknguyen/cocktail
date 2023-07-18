import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CocktailService} from 'src/app/common/services/cocktail.service';
import {FacadeService} from 'src/app/common/services/facade.service';

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
