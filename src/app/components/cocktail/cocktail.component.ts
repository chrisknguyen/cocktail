import { Component, Input } from '@angular/core';
import { FacadeService } from '@common/services/facade.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent {
  cocktail: any;

  @Input() cocktailId: number;

  // set cocktailId

  constructor(private facadeService: FacadeService) {
  }

  ngOnInit() {
    console.log('this:', this);
    console.log('cocktailId:', this.cocktailId);

    this.facadeService.cocktail.subject$.subscribe(response => {
      this.cocktail = response;
    });

  }
}
