import { ContentEditorComponent } from './../../../../../libs/dynamic-forms/src/lib/components/content-editor/content-editor.component';
import { tap } from 'rxjs/operators';
import { getAdvantages } from './../../../../../libs/store/src/lib/core/core.selectors';
import { loadAdvantages } from './../../../../../libs/store/src/lib/core/core.action';
import { Advantage } from './../../../../../libs/models/src/advantage.model';
import { Observable } from 'rxjs';
import { CoreState } from './../../../../../libs/store/src/lib/core/core.state';
import { Store } from '@ngrx/store';
import { MatTableWpConfig } from './../../../../../libs/dynamic-mat-table/src/lib/interfaces/table-interfaces';
import { AdvantageConfig } from './../config-data-services/advantage-config.service';
import { FormConfig } from '@photo-space/dynamic-forms';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DynamicMTableHelpers } from 'libs/dynamic-mat-table/src/lib/dynamic-m-table-helpers.service';

@Component({
  selector: 'ps-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  formConfig: FormConfig

   @ViewChild('formTemplate', {static: false}) formTemplate: ContentEditorComponent;

  public advantageTableConfig: MatTableWpConfig;
  public showSideBar: 'show' | 'full';

  public advantages$: Observable<Advantage[]>;
  private advantageData: Advantage[];

  constructor(
    private advantageConfig: AdvantageConfig,
    private dynamicMTableHelpers: DynamicMTableHelpers,
    private cdr: ChangeDetectorRef,
    private store: Store<{ core: CoreState }>
    ) {}

  ngOnInit(): void {
    this.formConfig = this.advantageConfig.getFormConfig(null);
    this.store.dispatch(loadAdvantages());
    this.advantages$ = this.store.select(getAdvantages).pipe(tap(advantages => this.onUpdateAdvantages(advantages)));
  }

  onSubminData(event) {
    console.log(event)
  }

  onUpdateAdvantages(data: Advantage[]) {
    this.advantageTableConfig = this.dynamicMTableHelpers.prepareDynamicTableDataToShow(data, this.advantageConfig.getTableDataConfig())
    this.advantageData = data;
  }

  onAddNewAdvantage() {
    this.showSideBar = 'show';
    this.formTemplate.form.patchValue(this.advantageData[0]);
  }

}
