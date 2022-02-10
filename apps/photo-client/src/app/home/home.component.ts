import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState, loadAboutMeInfo, loadAdvantages } from "@photo-space/core-store";
import { Observable } from 'rxjs';
import { Advantage, AboutMe, PhotoServiceItem } from "@photo-space/models";
import { getAvailableAboutMe, getAdvantages, getPhotoServices } from "@photo-space/core-store";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public advantages$: Observable<Advantage[]>;
  public aboutMe$: Observable<AboutMe>;
  public photoServices$: Observable<PhotoServiceItem[]>;

  constructor(
    private store: Store<{core: CoreState}>
  ) { }

  ngOnInit() {
    this.store.dispatch(loadAdvantages());
    this.store.dispatch(loadAboutMeInfo());
    this.aboutMe$ = this.store.select(getAvailableAboutMe);
    this.advantages$ = this.store.select(getAdvantages);
    this.photoServices$ = this.store.select(getPhotoServices);
  }

}
