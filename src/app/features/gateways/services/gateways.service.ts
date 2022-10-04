import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedResult } from '@core/models/paged-result';
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
    sorts: string,
    filters: string,
    page: number,
    pageSize: number
  ): Observable<PagedResult> {
    return this.http
      .get<PagedResult>(this.baseUrl, {
        params: {
          sorts,
          filters,
          page,
          pageSize
        }
      })
      .pipe(
        map((data: PagedResult) => {
          return {
            ...data,
            results: data.results.map((t: IGateway) => new GatewayModel(t))
          };
        })
      );
  }

  getById(): Observable<GatewayModel> {
    return this.http
      .get<IGateway>(this.baseUrl + `/id`)
      .pipe(map((data) => new GatewayModel(data)));
  }
}
