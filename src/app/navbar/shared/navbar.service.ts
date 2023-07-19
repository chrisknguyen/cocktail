import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() {
  }

  getNavbar(): Array<any> {
    return [
      {
        path: 'home',
        title: 'Home',
        name: 'Home',
        url: '/'
      },
      {
        path: 'about',
        title: 'About',
        name: 'About',
        url: '/about'
      },
      {
        path: 'login',
        title: 'Login',
        name: 'Login',
        url: '/login'
      },
      {
        path: 'cocktails',
        title: 'Cocktails',
        name: 'Cocktails',
        url: '/cocktails'
      },
      {
        path: 'places',
        title: 'Places',
        name: 'Places',
        url: '/places'
      }
    ];
  }
}
