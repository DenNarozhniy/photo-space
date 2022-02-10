import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-template-compositor',
  templateUrl: './template-compositor.component.html',
  styleUrls: ['./template-compositor.component.scss']
})
export class TemplateCompositorComponent implements OnInit {

@Input() showHeader = false;
@Input() showContent = true;
@Input() showFooter = false;

@Input() leftSideBarWidth: 'show' | 'full';
@Input() rightSideBarWidth: 'show' | 'full';

@Output() rightSideBarWidthChange = new EventEmitter();





  constructor() { }

  ngOnInit(): void {
  }

  changeRightSideBarWidth(option = null) {
     this.rightSideBarWidthChange.emit(option);
  }

}
