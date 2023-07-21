import { Component } from '@angular/core';
import { FacadeService } from '@common/../shared/services/facade.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public facadeService: FacadeService) {

  }

  ngOnInit(): void {
  }

}
