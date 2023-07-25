import {IMap} from "./map";

export interface IDestination {
  id: string;
  map: IMap;
  title: string;
  description: string;
  highlights: Array<any>;
  searchText: string;
}

export class Destination implements IDestination {
  id: string;
  map: IMap;
  title: string;
  description: string;
  highlights: Array<any>;
  searchText: string;

  constructor() {
  }
}
