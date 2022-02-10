import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-ps-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class PsButtonComponent implements OnInit {

  @Input() color = '';
  @Input() disabled = false;
  @Input() iconName = '';
  @Input() iconSize = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
