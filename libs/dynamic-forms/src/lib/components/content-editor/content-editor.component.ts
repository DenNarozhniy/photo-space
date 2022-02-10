import { FormConfig } from './../../interfaces/form-interface';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'photo-space-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrls: ['./content-editor.component.scss']
})
export class ContentEditorComponent implements OnInit {

  @Input() title: string = '';
  @Output() submitEvent = new EventEmitter();

  ngOnInit() {}

 /**
   * Form
   */
  form = new FormGroup({});

  /**
   * Form config
   */
  @Input()formConfig: FormConfig;

  /**
   * On changed form
   * @param data Form value
   */
  onChanged<T extends object = Partial<Event>>(data: T): void {
    console.log(data);
  }

  /**
   * On submit
   */
  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
        this.submitEvent.emit(this.form.value);
    }
  }
}
