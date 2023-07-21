import {IDestination} from "../models/destination";

export const DESTINATIONS: Array<IDestination> = [{
  id: '001',
  title: "Fountain Valley CA",
  map: {
    center: {lat: 33.690573, lng: -117.9877853117},
    zoom: 14
  },
}, {
  id: '002',
  title: "Griffith Park CA",
  map: {
    center: {lat: 34.13622509202139, lng: -118.29386078694868},
    zoom: 14
  },
},
  {
    id: '003',
    title: "Mendocino CA",
    map: {
      center: {lat: 39.308695986116945, lng: -123.79751058129371},
      zoom: 14
    },
  }, {
    id: '004',
    title: "San Francisco CA",
    map: {
      center: {lat: 37.754765976407256, lng: -122.4480811810121},
      zoom: 14
    },
  }]
