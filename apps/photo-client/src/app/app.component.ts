import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState, loadContactInfo, loadPhotoServices } from '@photo-space/core-store';

@Component({
  selector: 'photo-space-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  constructor(
    private store: Store<{core: CoreState}>
  ){}

  ngOnInit() {
    this.store.dispatch(loadContactInfo());
    this.store.dispatch(loadPhotoServices());
  }

}
