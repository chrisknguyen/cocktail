import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarRoutingModule } from './navbar.routing.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule,
    FormsModule,
    NavbarRoutingModule
  ]
})
export class NavbarModule {
}
