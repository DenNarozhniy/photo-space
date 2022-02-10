import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SquaredCarouselItem, SquareImgForCarousel } from '@photo-space/models';
import { environment } from '@photo-space/environment';
import { ApiConstants } from './api-constants';

@Injectable({
  providedIn: 'root'
})
export class SquaredCarouselService {
  private host: string = environment.HOST;

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getSquaredCarouselData(): Observable<any> {
    return this.httpClient.get(`${this.host}${ApiConstants.SquaredCarousel.squaredCarousel}`);
  }

  public addSquaredCarouselItem(squaredCarouselItem: SquaredCarouselItem): Observable<any> {
    return this.httpClient
      .post(`${this.host}${ApiConstants.SquaredCarousel.squaredCarousel}`, squaredCarouselItem);
  }

  public addSquareImgForCarousel(squaredCarouselID: string, squareImgForCarousel: SquareImgForCarousel): Observable<any> {
    const data = {squared_carousel_item_id: squaredCarouselID, ...squareImgForCarousel}
    return this.httpClient
      .post(`${this.host}${ApiConstants.SquaredCarousel.squaredCarouselImg}`, data);
  }

  public editSquaredCarouselItem(squaredCarouselItem: SquaredCarouselItem): Observable<any> {
    return this.httpClient
      .put(`${this.host}${ApiConstants.SquaredCarousel.squaredCarousel}`, squaredCarouselItem);
  }

  public editSquareImgForCarousel(squaredCarouselID: string, squareImgForCarousel: SquareImgForCarousel): Observable<any> {
    const data = { squared_carousel_item_id: squaredCarouselID , item: squareImgForCarousel }
    return this.httpClient
      .put(`${this.host}${ApiConstants.SquaredCarousel.squaredCarouselImg}`, data);
  }

  public deleteSquaredCarouselItem(id: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.SquaredCarousel.squaredCarousel}/${id}`);
  }

  public deleteSquareImgForCarousel(squaredCarouselID: string, id: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.SquaredCarousel.squaredCarouselImg}/${squaredCarouselID}/${id}`);
  }
}
