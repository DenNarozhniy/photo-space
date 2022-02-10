import { PsIconModule } from './../icon/icon.module';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PsButtonComponent } from './button.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PsButtonComponent],
  imports: [
    MatButtonModule,
    PsIconModule,
    CommonModule],
  exports: [PsButtonComponent]
})
export class PsButtonModule {}
