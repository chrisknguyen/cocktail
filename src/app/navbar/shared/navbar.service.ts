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
        path: 'countries',
        title: 'Countries',
        name: 'Countries',
        url: '/countries'
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
