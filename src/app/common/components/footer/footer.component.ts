import { Component } from '@angular/core';
import { FacadeService } from '@common/services/facade.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerCocktails: Array<any> = [];

  constructor(private facadeService: FacadeService) {
  }

  ngOnInit(): void {
    // let test = this.facadeService.cocktails.getCocktailsByIngredientName();
    // test.subscribe({
    //   next: (response) => {
    //     this.footerCocktails = response;
    //   }
    // });


    // this.cocktailService.subject$.subscribe({
    //   next: (data: any) => {
    //     this.footerCocktails = data;
    //   }
    // });
  }
}
