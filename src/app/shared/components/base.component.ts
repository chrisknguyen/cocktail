import {Component} from '@angular/core';
import {IRoute} from "../models/route";
import {FacadeService} from "../services/facade.service";

@Component({
  template: ''
})
export class BaseComponent<T = any> {
  id: string;
  route: IRoute;

  constructor(public facadeService: FacadeService) {
    this.route = this.facadeService.utils.decodeRoute(this.facadeService.location.path());
    this.id = this.route.params.id;
  }

  ngOnDestroy(): void {
  }

  goTo(path: string, params?: object, parentUrl?: string): void {
    path = decodeURIComponent(path);
    if (parentUrl) {
      path = `${parentUrl}/${path}`;
    }

    if (params) {
      this.facadeService.router.navigate([path, params]);
    } else {
      this.facadeService.router.navigate([path]);
    }
  }

}
