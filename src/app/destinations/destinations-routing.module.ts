import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DestinationsComponent} from "./destinations.component";
import {APPROUTES} from "../shared/constants/app-routes";
import {DestinationComponent} from "./destination/destination.component";

const routes: Routes = [
  {
    path: APPROUTES.destinations, title: 'Destinations', component: DestinationsComponent,
    children: [{
      path: APPROUTES.destinations + '/:idDestination', title: 'Destination', component: DestinationComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationsRoutingModule {
}
