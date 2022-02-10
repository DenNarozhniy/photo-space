import { Component, OnInit } from '@angular/core';
import { getContactInfo } from "@photo-space/core-store";
import { Observable } from 'rxjs';
import { ContactInfo } from "@photo-space/models";
import { Store } from '@ngrx/store';
import { CoreState } from "@photo-space/core-store";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public contactInfo$: Observable<ContactInfo>;

  constructor(
    private store: Store<{ core: CoreState }>
  ) { }

  ngOnInit() {
    this.contactInfo$ = this.store.select(getContactInfo);
  }

}
