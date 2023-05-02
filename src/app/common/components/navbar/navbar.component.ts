import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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

  constructor(public bsModalRef: BsModalRef, public bsModalService: BsModalService) {
  }

  ngOnInit() {
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
