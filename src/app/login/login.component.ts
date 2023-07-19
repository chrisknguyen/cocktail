import { Component } from '@angular/core';
import { FacadeService } from '@common/../shared/services/facade.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  cocktails: any;

  constructor(public facadeService: FacadeService) {

  }

  ngOnInit(): void {
    this.facadeService.cocktail.data$.subscribe((data: any) => {
      this.cocktails = data;
    });
  }
}