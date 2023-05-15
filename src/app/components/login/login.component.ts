import { Component } from '@angular/core';
import { FacadeService } from '@common/services/facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  cocktails: any;

  constructor(public facadeService: FacadeService) {

  }

  ngOnInit(): void {
    this.facadeService.cocktail.subject$.subscribe((data: any) => {
      this.cocktails = data;
      console.log('LoginComponent ngOnInit() this.cocktails: ', this.cocktails);
    });
  }
}
