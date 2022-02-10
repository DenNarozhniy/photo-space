import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState, getContactInfo } from '@photo-space/core-store';
import { Observable } from 'rxjs';
import { ContactInfo } from '@photo-space/models';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss']
})
export class SiteFooterComponent implements OnInit {

  public contactInfo$: Observable<ContactInfo>;

  constructor(
    private store: Store<{core: CoreState}>
  ) { }

  ngOnInit() {
    this.contactInfo$ = this.store.select(getContactInfo).pipe(tap(res => console.log(res)));
  }

}
