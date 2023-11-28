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
  countries: Array<any>;

  constructor(facadeService: FacadeService) {
    super(facadeService)
  }

  ngOnInit(): void {
    DESTINATIONS.forEach((dest) => {
      if (this.id === dest.id) {
        this.destination = dest;
      }
    });

    this.getCountries();
  }

  search(): void {
    console.log('search() text: ', this.destination.searchText);
  }

  getCountries() {
    this.facadeService.countries.getAllCountries().subscribe({
      next: (response) => {
        this.countries = response;
      }
    });
  }

  goToCountry(cocktail: any) {
    // this.facadeService.router.navigate([encodeURI('countries/:idDrinks=') + cocktail.idDrink]);
  }

}
