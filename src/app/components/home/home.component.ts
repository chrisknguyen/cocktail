import { Component } from '@angular/core';
import { CocktailService } from 'src/app/common/services/cocktail.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cocktails: any;
  destroy$ = new Subject<void>();

  constructor(public cocktailService: CocktailService) {

  }

  ngOnInit() {
    this.cocktailService.subject$.subscribe((data: any) => {
      this.cocktails = data;
      console.log('this.cocktails: ', this.cocktails);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
