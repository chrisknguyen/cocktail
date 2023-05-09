import { Component } from '@angular/core';
import { CocktailService } from 'src/app/common/services/cocktail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  cocktails: any;

  constructor(public cocktailService: CocktailService) {

  }

  ngOnInit(): void {
    this.cocktailService.subject$.subscribe((data: any) => {
      this.cocktails = data;
      console.log('LoginComponent ngOnInit() this.cocktails: ', this.cocktails);
    });
  }
}
