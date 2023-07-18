import {Component} from '@angular/core';
import {FacadeService} from "@common/services/facade.service";

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent {
  cocktails: any;

  constructor(public facadeService: FacadeService) {
  }

  ngOnInit() {
    this.getCocktails();
  }

  getCocktails() {
    this.facadeService.cocktail.data$.subscribe((data: any) => {
      this.cocktails = data;
    });
  }

  goToCocktail(cocktail: any) {
    this.facadeService.router.navigate([encodeURI('cocktails/:idDrinks=') + cocktail.idDrink]);
  }

}
