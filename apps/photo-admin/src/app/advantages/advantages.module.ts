import { SharedComponentsModule } from './../../../../../libs/shared-components/src/lib/shared-components.module';
import { AdvantagesRoutingModule } from './advantages-routing.module';
import { DynamicMatTableModule } from './../../../../../libs/dynamic-mat-table/src/lib/dynamic-mat-table.module';
import { DynamicFormsModule } from './../../../../../libs/dynamic-forms/src/lib/dynamic-forms.module';
import { AdvantagesComponent } from './advantages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AdvantagesComponent
  ],
    imports: [
      DynamicFormsModule,
      DynamicMatTableModule,
      AdvantagesRoutingModule,
      SharedComponentsModule,
      CommonModule
    ],
  providers: [],
  exports: [AdvantagesComponent]
})

export class AdvantagesModule { }
