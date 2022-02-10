import { tap } from 'rxjs/operators';
import { extractTouchedChanges } from './../../utils/form-changes.util';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FieldComponent } from '../../interfaces/form-interface';

@Component({
  selector: 'photo-space-field-text-editor',
  templateUrl: './field-text-editor.component.html',
  styleUrls: ['./field-text-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldTextEditorComponent  extends FieldComponent implements OnInit {
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
