import {Component} from '@angular/core';
import {FacadeService} from "@common/../shared/services/facade.service";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  countries: Array<any>;

  constructor(public facadeService: FacadeService) {
  }

  ngOnInit() {
    this.getCountries();
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
