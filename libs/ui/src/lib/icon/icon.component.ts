import { IconService } from './../../../../services/src/lib/icon.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() name: string;
  @Input() color: string;
  @Input() config: any;
  @Input() size: any = 20;

  constructor(
    private iconService: IconService
  ) { }

  ngOnInit(): void {
    if (this.name) {
      this.iconService.register(this.name);
    }
  }

}
