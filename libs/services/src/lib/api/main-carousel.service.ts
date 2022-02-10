import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@photo-space/environment';
import { ApiConstants } from './api-constants';

@Injectable({
  providedIn: 'root'
})
export class MainCarouselService {

  private host: string = environment.HOST;

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getMainCarousel(): Observable<any> {
    return this.httpClient
      .get(`${this.host}${ApiConstants.MainCarouse.mainCarousel}`);
  }

  public addMainCarousel(item): Observable<any> {
    return this.httpClient
      .post(`${this.host}${ApiConstants.MainCarouse.mainCarousel}`, item);
  }

  public editMainCarousel(item): Observable<any> {
    return this.httpClient
      .put(`${this.host}${ApiConstants.MainCarouse.mainCarousel}`, item);
  }

  public deleteMainCarousel(id): Observable<any> {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.MainCarouse.mainCarousel}/${id}`);
  }
}
