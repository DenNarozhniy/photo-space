import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Portfolio, PortfolioDescription, PortPhotos} from '@photo-space/models';
import { ApiConstants } from './api-constants';
import { environment } from '@photo-space/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private host: string = environment.HOST;

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getPortfolioData(): Observable<any> {
    return this.httpClient.get(`${this.host}${ApiConstants.Portfolio.getAll}`);
  }

  public addPortfolioItem(portItem: Portfolio): Observable<any> {
    return this.httpClient
      .post(`${this.host}${ApiConstants.Portfolio.add}`, portItem);
  }

  public addPortfolioPhoto(portfolioId: string, portfolioPhoto: PortPhotos): Observable<any> {
    const data = {portfolio_item_id: portfolioId, ...portfolioPhoto}
    return this.httpClient
      .post(`${this.host}${ApiConstants.Portfolio.addPortfolioPhoto}`, data);
  }

  public addPortfolioPhotoDescription(portfolioId: string, portfolioPhotoDescription: PortfolioDescription): Observable<any> {
    const data = {portfolio_item_id: portfolioId, ...portfolioPhotoDescription}
    return this.httpClient
      .post(`${this.host}${ApiConstants.Portfolio.portfolioPhotoDescription}`, data);
  }

  public editPortfolioItem(portItem: Portfolio): Observable<any> {
    return this.httpClient
      .put(`${this.host}${ApiConstants.Portfolio.edit}`, portItem);
  }

  public editPortfolioPhoto(portfolioId: string, portfolioPhoto: PortPhotos): Observable<any> {
    const data = { portfolio_item_id: portfolioId , item: portfolioPhoto }
    return this.httpClient
      .put(`${this.host}${ApiConstants.Portfolio.editPortfolioPhoto}`, data);
  }

  public editPortfolioPhotoDescription(portfolioId: string, portfolioPhotoDescription: PortfolioDescription): Observable<any> {
    const data = { portfolio_item_id: portfolioId , item: portfolioPhotoDescription }
    return this.httpClient
      .put(`${this.host}${ApiConstants.Portfolio.portfolioPhotoDescription}`, data);
  }

  public deletePortfolioItem(id: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.Portfolio.delete}/${id}`);
  }

  public deletePortfolioPhoto(portfolioId: string, id: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.Portfolio.deletePortfolioPhoto}/${portfolioId}/${id}`);
  }

  public deletePortfolioPhotoDescription(portfolioId: string, id: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.Portfolio.portfolioPhotoDescription}/${portfolioId}/${id}`);
  }
}
