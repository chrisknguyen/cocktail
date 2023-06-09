import { Injectable } from '@angular/core';

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

    return result;
  }

}
