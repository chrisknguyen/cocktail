import {Component} from '@angular/core';
import {BaseComponent} from "../shared/components/base.component";
import {FacadeService} from "../shared/services/facade.service";
import {IMap} from "../shared/models/map";
import {IDestination} from "../shared/models/destination";
import {DESTINATIONS} from "../shared/mocks/destinations";

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent extends BaseComponent {
  destinations: Array<IDestination>;

  constructor(facadeService: FacadeService) {
    super(facadeService)
  }

  ngOnInit() {
    this.destinations = DESTINATIONS;
  }

  goToDestination(destination: any): void {
    this.goTo(this.route.url + '/:idDestination=' + destination.id, {id: destination.id});
  }
}
