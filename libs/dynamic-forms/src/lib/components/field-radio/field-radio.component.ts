import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { extractTouchedChanges } from '../../utils/form-changes.util';
import { FieldWithOptionsComponent } from '../../interfaces/form-interface';

@Component({
  selector: 'ms-field-radio',
  templateUrl: './field-radio.component.html',
  styleUrls: ['./field-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldRadioComponent extends FieldWithOptionsComponent implements OnInit {
  /**
   * Detect touched changed
   */
  touchedChanged$!: Observable<boolean>;

  /**
   * Watching
   */
  valueChanges$!: Observable<boolean>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.touchedChanged$ = extractTouchedChanges(this.formControl).pipe(tap(() => this.changeDetectorRef.markForCheck()));
    this.valueChanges$ = this.formControl.valueChanges.pipe(tap(() => this.changeDetectorRef.markForCheck()));
  }
}
