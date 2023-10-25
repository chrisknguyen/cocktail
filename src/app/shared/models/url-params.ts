import {IMap} from "./map";

export interface IUrlParams {
  title: string;
  id: string;
  map: IMap
}

export class UrlParams implements IUrlParams {
  title: string;
  id: string;
  map: IMap;

  constructor() {
  }
}
