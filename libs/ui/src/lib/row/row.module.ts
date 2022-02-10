import { CommonModule } from '@angular/common';
import { RowComponent } from './row.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [RowComponent],
  imports: [CommonModule],
  exports: [RowComponent]
})
export class RowModule {}
