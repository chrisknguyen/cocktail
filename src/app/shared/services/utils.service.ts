import {Injectable} from '@angular/core';
import {IRoute} from "../models/route";
import {IUrlParams} from "../models/url-params";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {
  }

  parseObject(object: any) {
    let result = {} as any;
    for (let key in object) {
      result[key] = object[key];

      if (object[key]) {
        if (object[key] === 'true' || object[key] === 'false') {
          object[key] = JSON.parse(object[key]);
        }
      }
    }
    console.log('result', result);
    return result;
  }

  decodeRoute(route: string): IRoute {
    const routeRes = {} as IRoute;
    const routeSplit = decodeURIComponent(route).split(';');
    routeRes.url = routeSplit[0];
    routeRes.parentUrl = routeRes.url.split('/')[1];
    routeSplit.splice(0, 1);
    let strObj = '{';

    for (let i = 0; i < routeSplit.length; i++) {
      const items = routeSplit[i].split('=');
      strObj += '"' + items[0] + '":"' + items[1] + '"';

      if (i + 1 < routeSplit.length) {
        strObj += ',';
      }
    }

    strObj += '}';

    routeRes.params = this.clearObjectParams(JSON.parse(strObj)) as IUrlParams;
    return routeRes;
  }

  clearObjectParams(object: object): object {
    const result = {};
    for (const key in object) {
      // @ts-ignore
      if (object[key]) {
        // @ts-ignore
        if (object[key] === 'false' || object[key] === 'true') {
          // ESLINT: Disable @typescript-eslint/no-unsafe-assignment
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          // @ts-ignore
          object[key] = JSON.parse(object[key]);
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        // @ts-ignore
        result[key] = object[key];
      }
    }
    return result;
  }


}
