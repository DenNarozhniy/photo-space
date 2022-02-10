import { UiModule } from '@photo-space/ui';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { NgModule } from '@angular/core';
import {
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG,
     PerfectScrollbarConfigInterface
     } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
      DialogComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      UiModule,
      ReactiveFormsModule,
      MatDialogModule,
      PerfectScrollbarModule
  ],
  entryComponents: [
      DialogComponent,
  ],
  exports: [
      DialogComponent
  ],
  providers: [
      {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }
  ]
})
export class DialogModule {}
