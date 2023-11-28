import { Component, Input } from '@angular/core';
import {FacadeService} from "../../shared/services/facade.service";

@Component({
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  cocktail: any;

  constructor(private facadeService: FacadeService) {
  }

  ngOnInit() {;
  }
}
