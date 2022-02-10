import { loadAdvantages } from './../../../../libs/store/src/lib/core/core.action';
import { eventFormConfig } from './event-new.form';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'photo-space-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 public eventFormConfig = eventFormConfig;
 constructor() {
   console.log('sdfsdf')
 }
}
