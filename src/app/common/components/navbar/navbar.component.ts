import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/common/services/cocktail.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  searchText: string = 'gin';
  cocktails: [] = [];

  constructor(private cocktailService: CocktailService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.cocktailService.getCocktailsByIngredientName(this.searchText);

    this.cocktailService.subject$.subscribe(
      {
        next: (data: any) => {
          this.cocktails = data;
        }
      }
    );

    // if (this.cocktails.length === 0) {
    //   this.searchText = 'old fashion';
    //   this.cocktailService.getCocktailByName(this.searchText);
    // }
  }

  goToLogin(): void {
  }
}
