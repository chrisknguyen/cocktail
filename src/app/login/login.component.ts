import { Component } from '@angular/core';
import { FacadeService } from '@common/../shared/services/facade.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  countries: any;

  constructor(public facadeService: FacadeService) {

  }

  ngOnInit(): void {
    this.facadeService.countries.data$.subscribe((data: any) => {
      this.countries = data;
    });
  }
}
