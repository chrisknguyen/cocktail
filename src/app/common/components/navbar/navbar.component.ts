import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CocktailService } from 'src/app/common/services/cocktail.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  config = {
    animated: false,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };
  searchText: string = '';

  constructor(private cocktailService: CocktailService, bsModalRef: BsModalRef, public bsModalService: BsModalService) {
  }

  ngOnInit() {
    this.searchText = 'gin';
  }

  search(): void {
    this.cocktailService.getCocktailsByIngredient(this.searchText);
  }

  openModal(template: any) {
    this.bsModalService.show(template, this.config);
  }

  goToLogin(): void {

  }

  closeModal() {
    this.bsModalService.hide();
  }
}
