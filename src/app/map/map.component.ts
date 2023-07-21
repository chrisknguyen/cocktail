import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
  ngOnInit(): void {
    let map;
    const loader = new Loader({
      apiKey: "AIzaSyDEq2aZIBdRqgLhNAzFWwF0YKlrKNQCVvo",
      version: "weekly",
    });

    loader.load().then(async () => {
      const {Map} = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      map = new Map(document.getElementById("map") as HTMLElement, {
        center: {lat: 33.690573, lng: -117.9877853117},
        zoom: 14,
      });
    });
  }
}
