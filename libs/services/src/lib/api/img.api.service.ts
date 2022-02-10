import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from './api-constants';

@Injectable({
  providedIn: 'root'
})
export class ImgApiService {
  SERVER_URL = 'http://localhost:4000/api/';

  constructor(private http: HttpClient) {
  }

  public uploadIMG(formData, path: string) {
    return this.http.post<any>(`${this.SERVER_URL}upload-photos?path=${encodeURIComponent(path)}`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  public addNewFolder(path: string, inRoot = false) {
    return this.http.post<any>(`${this.SERVER_URL}${ApiConstants.ImageManager.addNewFolder}`, { path, inRoot });
  }

  public renameDirectory(data: any) {
    return this.http.put<any>(`${this.SERVER_URL}${ApiConstants.ImageManager.renameDirectory}`, { data });
  }

  public deleteItemByPath(path: string) {
    return this.http.delete<any>(`${this.SERVER_URL}${ApiConstants.ImageManager.deleteItemByPath}?path=${encodeURIComponent(path)}`);
  }

  public getPhotoDirectoriesTree() {
    return this.http.get<any>(`${this.SERVER_URL}img-directories-tree`);
  }
}
