import { Component } from '@angular/core';
import { CocktailService } from 'src/app/common/services/cocktail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cocktails: any;

  constructor(private cocktailService: CocktailService) {
  }

  ngOnInit() {
    this.cocktailService.getCocktailsByIngredient().subscribe((data: any) => {
      this.cocktails = data ? data.drinks : [];
    });
  }
}
