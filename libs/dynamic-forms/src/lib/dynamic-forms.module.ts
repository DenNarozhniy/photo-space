import { AngularMaterialModule } from './../../../angular-material/src/lib/angular-material.module';
import { ContentEditorComponent } from './components/content-editor/content-editor.component';
import { BaseFormConstructor } from './services/base-form-constructor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formsLiteComponents, formsLiteEntryComponents, formsLiteDirectives, formsLiteExportComponents } from './dynamic-form.common';
import { FormConstructor } from './interfaces/form-constructor.interface';
import { EditorModule } from '@progress/kendo-angular-editor';

@NgModule({
  imports: [
    CommonModule,
     FormsModule,
      ReactiveFormsModule,
      AngularMaterialModule,
      EditorModule,
    ],
  declarations: [
     ...formsLiteComponents,
     ...formsLiteEntryComponents,
     ...formsLiteDirectives,
     ContentEditorComponent,
    ],
  entryComponents: formsLiteEntryComponents,
  exports: [
    ...formsLiteExportComponents,
    ...formsLiteDirectives,
    ContentEditorComponent
  ],
  providers: [
    {
      provide: FormConstructor,
      useClass: BaseFormConstructor
    }
  ]
})
export class DynamicFormsModule {}
