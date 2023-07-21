import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {IDestination} from "../shared/models/destination";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
  latitude: number = 33.690573;
  longitude: number = -117.9877853117;
  zoom: number = 14;
  // destination = {
  //   title: "Fountain Valley CA, 92708",
  //   center: {lat: this.latitude, lng: this.longitude},
  //   zoom: this.zoom
  // };

  @Input() destination: IDestination;

  ngOnInit(): void {
    this.loadMap();
  }

  loadMap(): void {
    const loader = new Loader({
      apiKey: "AIzaSyDEq2aZIBdRqgLhNAzFWwF0YKlrKNQCVvo",
      version: "weekly",
    });

    loader.importLibrary("maps").then((Map) => {
      new Map.Map(document.getElementById("map") as HTMLElement, this.destination.map);
    });
  }
}
