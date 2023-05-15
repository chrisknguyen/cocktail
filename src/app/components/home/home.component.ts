import { Component } from '@angular/core';
import { FacadeService } from '@common/services/facade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cocktails: any;

  constructor(public facadeService: FacadeService) {

  }

  ngOnInit(): void {
    this.facadeService.cocktail.subject$.subscribe((data: any) => {
      this.cocktails = data;
      console.log('HomeComponent ngOnInit() this.cocktails: ', this.cocktails);
    });
  }

  goToCocktail(idDrink: string) {
    console.log('idDrink: ', idDrink);
    this.facadeService.router.navigateByUrl('/cocktail');

  }
}
