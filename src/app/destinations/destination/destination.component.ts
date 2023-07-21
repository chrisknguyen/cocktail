import {Component} from '@angular/core';
import {FacadeService} from "../../shared/services/facade.service";
import {BaseComponent} from "../../shared/components/base.component";
import {DESTINATIONS} from "../../shared/mocks/destinations";
import {IDestination} from "../../shared/models/destination";

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent extends BaseComponent {
  title: string;
  destination: IDestination;

  constructor(facadeService: FacadeService) {
    super(facadeService)
  }

  ngOnInit(): void {

    DESTINATIONS.forEach((dest) => {
      if (this.id === dest.id) {
        this.destination = dest;
      }
    })

    this.title = this.route.params.title;
  }
}
