import { IUrlParams } from './url-params';

export interface IRoute {
  parentUrl?: string,
  url: string,
  params: IUrlParams,
}
