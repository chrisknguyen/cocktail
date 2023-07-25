import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {IDestination} from "../shared/models/destination";
import {API} from "../shared/constants/apiKeys";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
  @Input() destination: IDestination;

  searchText: string;
  service: any;
  map: google.maps.Map;
  infowindow: any;
  loader: any;

  ngOnInit(): void {
    this.loadMap();
  }

  loadMap(): void {
    this.loader = new Loader({
      apiKey: API.key,
      version: "weekly"
    });

    this.loader.importLibrary("maps").then((Map: any) => {
      this.map = new Map.Map(document.getElementById("map") as HTMLElement, this.destination.map);
    });

    // this.loader.importLibrary("marker").then((Marker: any) => {
    //   new Marker.AdvancedMarkerElement({
    //     title: this.destination.title,
    //     map: this.map,
    //     position: this.destination.map.center,
    //   });
    // });

  }

  searchPlace(): void {
    const request = {
      query: this.searchText,
      fields: ["name", "geometry"],
    };

    this.loader.importLibrary("places").then((Place: any) => {
      new Place.PlacesService(this.map).findPlaceFromQuery(request, (results: any, status: any) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          for (let i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }

          this.map.setCenter(results[0].geometry.location);
        }
      });
    })
  }

  createMarker(place: any) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location,
    });

    google.maps.event.addListener(marker, "click", () => {
      this.infowindow.setContent(place.name || "");
      this.infowindow.open(this.map);
    });
  }

}
