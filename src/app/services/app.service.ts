import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { EndpointResponse } from '../models/endpoint.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  endpointUrl:string  = "http://pb-api.herokuapp.com/bars";

  constructor(private _httpClient: HttpClient) {
  }

  getEndpoint(): Observable<EndpointResponse> {
    return this._httpClient.get(this.endpointUrl).map((response: EndpointResponse) => response);
  }
}
