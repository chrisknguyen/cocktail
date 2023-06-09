import { Component, Input } from '@angular/core';
import { FacadeService } from '@common/services/facade.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent {
  cocktail: any;

  constructor(private facadeService: FacadeService) {
  }

  ngOnInit() {
    this.facadeService.cocktail.data$.subscribe(response => {
      this.cocktail = response;
    });

    console.log('location: ', this.facadeService.location.path());
    console.log('router', this.facadeService.router);
  }
}
