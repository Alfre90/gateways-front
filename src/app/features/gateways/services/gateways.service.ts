import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '@environment/environment';
import { map, Observable } from 'rxjs';
import { IGateway } from '../interfaces/gateway';
import { GatewayModel } from '../models/gateway';

@Injectable({
  providedIn: 'root'
})
export class GatewaysService {
  baseUrl = API_URL + '/gateways';
  constructor(private http: HttpClient) {}

  getAll(
    skip: number,
    take: number,
    filters: string
  ): Observable<GatewayModel[]> {
    return this.http
      .get<IGateway[]>(this.baseUrl, {
        params: {
          skip,
          take,
          filters
        }
      })
      .pipe(map((data) => data.map((t: IGateway) => new GatewayModel(t))));
  }

  getById(): Observable<GatewayModel> {
    return this.http
      .get<IGateway>(this.baseUrl + `/id`)
      .pipe(map((data) => new GatewayModel(data)));
  }
}
