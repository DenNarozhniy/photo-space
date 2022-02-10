import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvantageService {
  private host: string = environment.HOST;

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAdvantages(): Observable<any> {
    return this.httpClient
      .get(`${this.host}advantages`);
  }

  public addAdvantage(item): Observable<any> {
    return this.httpClient
      .post(`${this.host}add-advantage`, item);
  }

  public editAdvantage(item): Observable<any> {
    return this.httpClient
      .put(`${this.host}update-advantage`, item);
  }

  public deleteAdvantage(id): Observable<any> {
    return this.httpClient
      .delete(`${this.host}delete-advantage/${id}`);
  }
}
