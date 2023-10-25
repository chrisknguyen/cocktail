import {Component} from '@angular/core';
import {FacadeService} from "../../shared/services/facade.service";
import {BaseComponent} from "../../shared/components/base.component";
import {DESTINATIONS} from "../../shared/mocks/destinations";
import {IDestination} from "../../shared/models/destination";

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent extends BaseComponent {
  destination: IDestination;
  cocktails: any;

  constructor(facadeService: FacadeService) {
    super(facadeService)
  }

  ngOnInit(): void {
    DESTINATIONS.forEach((dest) => {
      if (this.id === dest.id) {
        this.destination = dest;
      }
    });

    this.getCocktails();
  }


  search(): void {
    console.log('search() text: ', this.destination.searchText);
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
