import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoreState, getPhotoServices } from '@photo-space/core-store';
import { PhotoServiceItem } from '@photo-space/models';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services$: Observable<PhotoServiceItem[]>;
  
  constructor(
    private store: Store<{core: CoreState}>,
  ) { }

  ngOnInit() {
    this.services$ = this.store.select(getPhotoServices);
  }

}
