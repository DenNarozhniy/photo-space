import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { PhotoServiceItem } from '@photo-space/models';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements OnInit, OnChanges {

  @Input() services: PhotoServiceItem[];
  test = [];

  constructor() { }

  ngOnInit() {
    console.log(this.services);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.services)
    this.test = [];
    if (this.services.length) {
      this.test.push(this.services[0]);
      this.test.push(this.services[0]);
      this.test.push(this.services[0]);
      this.test.push(this.services[0]);
    }
  }
}
