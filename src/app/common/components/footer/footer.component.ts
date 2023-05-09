import { Component } from '@angular/core';
import { CocktailService } from 'src/app/common/services/cocktail.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerCocktails: Array<any> = [];

  constructor(private cocktailService: CocktailService) {
  }

  ngOnInit(): void {
    this.cocktailService.subject$.subscribe({
      next: (data: any) => {
        this.footerCocktails = data;
      }
    });
  }
}
