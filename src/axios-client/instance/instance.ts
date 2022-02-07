import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosStatic,
  Method,
} from 'axios';
import { AxiosClientInterceptors } from '../interceptors/axios-client-interceptors';

import { IRequestBody } from '../types/axios-client-types';

class AxiosClient {
  private baseUrl: string;
  private client: AxiosInstance;
  private headers: AxiosRequestHeaders;

  constructor(
    baseUrl: string,
    client: AxiosStatic,
    headers: AxiosRequestHeaders
  ) {
    this.baseUrl = baseUrl;
    this.client = this.init(client);
    this.headers = headers;
  }

  public login(url: string, method: Method, body: IRequestBody = {}) {
    return async () => await this.request(url, method, body);
  }

  public logout() {
    return () => Promise.resolve('Logout');
  }

  public registration(url: string, method: Method, body: IRequestBody = {}) {
    return async () => await this.request(url, method, body);
  }

  public getUser(url: string, method: Method) {
    return async () => await this.request(url, method);
  }

  public async request(url: string, method: Method, body: IRequestBody = {}) {
    const req = {
      url,
      method,
      data: body,
    };

    return await this.client.request(req);
  }

  public init(client: AxiosStatic): AxiosInstance {
    const config: AxiosRequestConfig = {
      baseURL: this.baseUrl,
      headers: this.headers,
    };

    const instance = client.create(config);

    AxiosClientInterceptors.setRequestInterceptor(instance);
    AxiosClientInterceptors.setResponseInterceptor(instance);

    return instance;
  }
}

export default new AxiosClient('https://reqres.in/api', axios, {
  'Content-Type': 'application/json',
});
