import {Component, Input, OnInit} from '@angular/core';
import { Advantage } from '@photo-space/models';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  @Input() advantages: Advantage[];

  constructor() { }

  ngOnInit() {

  }

}
