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
      }, {
        path: 'cocktails',
        title: 'Cocktails',
        name: 'Cocktails',
        url: '/cocktails'
      }, {
        path: 'destinations',
        title: 'Destinations',
        name: 'Destinations',
        url: '/destinations'
      }, {
        path: 'about',
        title: 'About',
        name: 'About',
        url: '/about'
      },
      // {
      //   path: 'profile',
      //   title: 'Profile',
      //   name: 'Profile',
      //   url: '/profile'
      // }
    ]
  };
}
