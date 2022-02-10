import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'photo-space-simple-item-with-slide',
  templateUrl: './simple-item-with-slide.component.html',
  styleUrls: ['./simple-item-with-slide.component.scss']
})
export class SimpleItemWithSlideComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() moreInfo: string = '';
  @Input() isFroze = false;
  private _sliderValue;
  @Input() set sliderValue(value) {
     this._sliderValue = value;
  };
  get sliderValue() {
    return this._sliderValue;
  }
  @Input() countNumber: number;
  @Input() countStepNumber: number;
  @Input() showCountPart = true;
  @Output() onChangeCount = new EventEmitter<number>();
  @Output() onActivationService = new EventEmitter<{isCheck:boolean, count:number}>();

  constructor() { }

  ngOnInit() {
  }

  public onSlideChange(event) {
    this.onActivationService.emit({
      isCheck: event.checked,
      count: this.countNumber,
    });
  }

  public increment() {
    if (this.countNumber !== 100) {
      this.countNumber += this.countStepNumber;
      this.onChangeCount.emit(this.countNumber);
    }
  }

  public decrement() {
    if (this.countNumber !== 1) {
      this.countNumber -= this.countStepNumber;
      this.onChangeCount.emit(this.countNumber);
    }
  }

}
