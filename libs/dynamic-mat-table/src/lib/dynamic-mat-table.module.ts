import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../../angular-material/src/lib/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import {CdkTableModule} from '@angular/cdk/table';
import { DynamicMTableHelpers } from './dynamic-m-table-helpers.service';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule
  ],
  declarations: [
    DynamicTableComponent
  ],
  exports: [
    DynamicTableComponent
  ],
  providers: [
    DynamicMTableHelpers
  ]
})
export class DynamicMatTableModule {}
