import { IconComponent } from './icon.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [IconComponent],
  imports: [
    MatIconModule,
    CommonModule],
  exports: [IconComponent]
})
export class PsIconModule {}
