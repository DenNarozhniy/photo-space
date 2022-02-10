import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState, getPhotoServices } from '@photo-space/core-store';
import { ActivatedRoute } from '@angular/router';
import { PhotoServiceItem } from '@photo-space/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  public currentService$: Observable<PhotoServiceItem>;

  constructor(
    private store: Store<{core: CoreState}>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentService$ = this.store.select(getPhotoServices)
      .pipe(map(services => services
        .filter(service => service.name_en === this.activatedRoute.snapshot.params.name)[0]));
  }

}
