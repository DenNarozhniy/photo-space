import { RowModule } from './row/row.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule,
    RowModule
  ],
  declarations: [IconComponent],
  exports: [
    RowModule
  ]
})
export class UiModule {}
