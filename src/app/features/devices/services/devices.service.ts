import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedResult } from '@core/models/paged-result';
import { API_URL } from '@environment/environment';
import { map, Observable } from 'rxjs';
import { IAddDevice } from '../interfaces/add-device';
import { IDevice } from '../interfaces/device';
import { DeviceModel } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  baseUrl = API_URL + '/devices';
  constructor(private http: HttpClient) {}

  getAll(
    sorts: string,
    filters: string,
    page: number = 1,
    pageSize: number = 10
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
            results: data.results.map((t: IDevice) => new DeviceModel(t))
          };
        })
      );
  }

  getById(id: number): Observable<DeviceModel> {
    return this.http
      .get<IDevice>(this.baseUrl + `/${id}`)
      .pipe(map((data) => new DeviceModel(data)));
  }

  addDevice(device: IAddDevice): Observable<{ uid: number }> {
    return this.http.post<{ uid: number }>(this.baseUrl, device);
  }

  editDevice(device: IDevice): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${device.uid}`, device);
  }

  deleteDevice(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe();
  }
}
