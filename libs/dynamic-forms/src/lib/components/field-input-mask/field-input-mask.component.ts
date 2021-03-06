import { FormFieldInputMask } from './../../interfaces/form-interface';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { extractTouchedChanges } from '../../utils/form-changes.util';
import { FieldComponent } from '../../interfaces/form-interface';

@Component({
  selector: 'ms-field-input-mask',
  templateUrl: './field-input-mask.component.html',
  styleUrls: ['./field-input-mask.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldInputMaskComponent extends FieldComponent<FormFieldInputMask> implements OnInit {
  /**
   * Detect touched changed
   */
  touchedChanged$!: Observable<boolean>;

  /**
   * Value changes
   */
  valueChanges$!: Observable<boolean>;

  constructor(protected changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.touchedChanged$ = extractTouchedChanges(this.formControl).pipe(tap(() => this.changeDetectorRef.markForCheck()));
    this.valueChanges$ = this.formControl.valueChanges.pipe(tap(() => this.changeDetectorRef.markForCheck()));
  }
}
