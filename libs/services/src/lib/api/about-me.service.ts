import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from './api-constants';
import { environment } from "@photo-space/environment";

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  private host: string = environment.HOST;

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAboutMes(): Observable<any> {
    return this.httpClient
      .get(`${this.host}${ApiConstants.AboutMe.getAll}`);
  }

  public addAboutMe(item): Observable<any> {
    return this.httpClient
      .post(`${this.host}${ApiConstants.AboutMe.add}`, item);
  }

  public editAboutMe(item): Observable<any> {
    return this.httpClient
      .put(`${this.host}${ApiConstants.AboutMe.edit}`, item);
  }

  public deleteAboutMe(id): Observable<any> {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.AboutMe.delete}/${id}`);
  }
}
