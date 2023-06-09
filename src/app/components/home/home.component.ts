import { Component } from '@angular/core';
import { FacadeService } from '@common/services/facade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cocktails: any;

  constructor(public facadeService: FacadeService) {

  }

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails() {
    this.facadeService.cocktail.data$.subscribe((data: any) => {
      this.cocktails = data;
    });
  }

  goToCocktail(cocktail: any) {
    this.facadeService.router.navigate(['/cocktail', this.facadeService.utils.parseObject({ idDrink: cocktail.idDrink })]);
  }

}
