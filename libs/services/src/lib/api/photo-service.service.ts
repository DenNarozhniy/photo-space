import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import {
  FareServiceDescriptionItem,
  FareServiceItem, IAddInfo, IAddServices, ICalculatorService,
  PhotoServiceItem
} from '@photo-space/models';
import { environment } from '@photo-space/environment';
import { ApiConstants } from './api-constants';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {
  private host: string = environment.HOST;

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getPhotoServices(): Observable<any> {
    return this.httpClient
      .get(`${this.host}${ApiConstants.PhotoServices.getAll}`);
  }

  public getPhotoServiceById(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id.toString());
    return this.httpClient
      .get(`${this.host}${ApiConstants.PhotoServices.getById}`, { params });
  }

  public addPhotoService(service: PhotoServiceItem): Observable<any> {
    return this.httpClient
      .post(`${this.host}${ApiConstants.PhotoServices.add}`, service);
  }

  public addFareService(serviceId: string, fare: FareServiceItem): Observable<any> {
    const data = {service_id: serviceId, ...fare};
    return this.httpClient
      .post(`${this.host}${ApiConstants.PhotoServices.addFare}`, data);
  }

  /**
   * fare description crud  START
   */

  public addFareDescription(serviceId: string, fareId: string, fareDescription: FareServiceDescriptionItem): Observable<any> {
    const data = { service_id: serviceId, fare_id: fareId, ...fareDescription };
    return this.httpClient
      .post(`${this.host}${ApiConstants.PhotoServices.fareDescription}`, data);
  }

  public updateFareDescription(serviceId: string, fareId: string, item: FareServiceDescriptionItem): Observable<any> {
    const data = { service_id: serviceId, fare_id: fareId, item };
    return this.httpClient
      .put(`${this.host}${ApiConstants.PhotoServices.fareDescription}`, data);
  }

  public deleteFareDescription(serviceId: string, fareId: string, fareDescriptionId: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.PhotoServices.fareDescription}/${serviceId}/${fareId}/${fareDescriptionId}`);
  }

  /**
   * fare description crud  END
   */

  /**
   * fare AddInfo crud  START
   */

  public addFareAddInfo(serviceId: string, fareId: string, fareAddInfo: IAddInfo): Observable<any> {
    const data = { service_id: serviceId, fare_id: fareId, ...fareAddInfo };
    return this.httpClient
      .post(`${this.host}${ApiConstants.PhotoServices.fareAddInfo}`, data);
  }

  public updateFareAddInfo(serviceId: string, fareId: string, item: IAddInfo): Observable<any> {
    const data = { service_id: serviceId, fare_id: fareId, item };
    return this.httpClient
      .put(`${this.host}${ApiConstants.PhotoServices.fareAddInfo}`, data);
  }

  public deleteFareAddInfo(serviceId: string, fareId: string, fareAddInfoItemId: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.PhotoServices.fareAddInfo}/${serviceId}/${fareId}/${fareAddInfoItemId}`);
  }

  /**
   * fare AddInfo crud  END
   */
  /**
   * fare Add service crud  START
   */

  public addFareAddService(serviceId: string, fareId: string, fareAddService: IAddServices): Observable<any> {
    const data = { service_id: serviceId, fare_id: fareId, ...fareAddService };
    return this.httpClient
      .post(`${this.host}${ApiConstants.PhotoServices.fareAddService}`, data);
  }

  public updateFareAddService(serviceId: string, fareId: string, item: IAddServices): Observable<any> {
    const data = { service_id: serviceId, fare_id: fareId, item };
    return this.httpClient
      .put(`${this.host}${ApiConstants.PhotoServices.fareAddService}`, data);
  }

  public deleteFareAddService(serviceId: string, fareId: string, fareAddServiceItemId: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.PhotoServices.fareAddService}/${serviceId}/${fareId}/${fareAddServiceItemId}`);
  }

  /**
   * fare Add service crud  END
   */

  public addCalculateFare(serviceId: string, fare: ICalculatorService): Observable<any> {
    const data = {service_id: serviceId, ...fare}
    return this.httpClient
      .post(`${this.host}${ApiConstants.PhotoServices.calculateFareItem}`, data);
  }

  public editPhotoService(service: PhotoServiceItem): Observable<any> {
    return this.httpClient
      .put(`${this.host}${ApiConstants.PhotoServices.update}`, service);
  }

  public editFareService(serviceId: string, service: FareServiceItem): Observable<any> {
    const data = { serviceId , item: service }
    return this.httpClient
      .put(`${this.host}${ApiConstants.PhotoServices.updateFare}`, data);
  }

  public editCalculateFareService(serviceId: string, service: ICalculatorService): Observable<any> {
    const data = { serviceId , item: service };
    return this.httpClient
      .put(`${this.host}${ApiConstants.PhotoServices.calculateFareItem}`, data);
  }

  public deletePhotoService(id: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.PhotoServices.delete}/${id}`);
  }

  public deleteFareService(serviceId: string, id: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.PhotoServices.deleteFare}/${serviceId}/${id}`);
  }

  public deleteFareCalculate(serviceId: string, id: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.PhotoServices.calculateFareItem}/${serviceId}/${id}`);
  }

}
