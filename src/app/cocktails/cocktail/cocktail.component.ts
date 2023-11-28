import { Component, Input } from '@angular/core';
import {FacadeService} from "../../shared/services/facade.service";

@Component({
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent {
  cocktail: any;

  constructor(private facadeService: FacadeService) {
  }

  ngOnInit() {;
  }
}
