import {Component, Input, OnInit} from '@angular/core';
import { AboutMe } from '@photo-space/models';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  @Input() aboutMe: AboutMe;

  constructor() { }

  ngOnInit() {
  }

}
