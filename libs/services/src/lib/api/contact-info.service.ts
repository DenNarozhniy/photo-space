import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactInfo, InstagramPhoto, PhoneNumber } from '@photo-space/models';
import { ApiConstants } from './api-constants';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  private host: string = environment.HOST;

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getContactInfoData(): Observable<any> {
    return this.httpClient.get(`${this.host}${ApiConstants.ContactInfo.getAll}`);
  }

  public addContactInfo(contactInfo: ContactInfo): Observable<any> {
    return this.httpClient
      .post(`${this.host}${ApiConstants.ContactInfo.add}`, contactInfo);
  }

  public addPhoneNumber(contactId: string, phoneNumber: PhoneNumber): Observable<any> {
    const data = {contact_info_item_id: contactId, ...phoneNumber}
    return this.httpClient
      .post(`${this.host}${ApiConstants.ContactInfo.addPhoneNumber}`, data);
  }

  public addInstagramPhoto(contactId: string, instaPhoto: InstagramPhoto): Observable<any> {
    const data = {contact_info_item_id: contactId, ...instaPhoto}
    return this.httpClient
      .post(`${this.host}${ApiConstants.ContactInfo.addInstagramPhoto}`, data);
  }

  public editContactInfo(contactInfo: ContactInfo): Observable<any> {
    return this.httpClient
      .put(`${this.host}${ApiConstants.ContactInfo.update}`, contactInfo);
  }

  public editPhoneNumber(contactId: string, phoneNumber: PhoneNumber): Observable<any> {
    const data = { contact_info_item_id: contactId , item: phoneNumber }
    return this.httpClient
      .put(`${this.host}${ApiConstants.ContactInfo.updatePhoneNumber}`, data);
  }

  public editInstagramPhoto(contactId: string, instaPhoto: InstagramPhoto): Observable<any> {
    const data = { contact_info_item_id: contactId , item: instaPhoto }
    return this.httpClient
      .put(`${this.host}${ApiConstants.ContactInfo.updateInstagramPhoto}`, data);
  }

  public deleteContactInfo(id: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.ContactInfo.delete}/${id}`);
  }

  public deletePhoneNumbere(contactId: string, id: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.ContactInfo.deletePhoneNumber}/${contactId}/${id}`);
  }

  public deleteInstagramPhoto(contactId: string, id: string) {
    return this.httpClient
      .delete(`${this.host}${ApiConstants.ContactInfo.deleteInstagramPhoto}/${contactId}/${id}`);
  }

}
