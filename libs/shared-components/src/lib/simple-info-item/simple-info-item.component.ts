import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ps-simple-info-item',
  templateUrl: './simple-info-item.component.html',
  styleUrls: ['./simple-info-item.component.scss']
})
export class SimpleInfoItemComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
