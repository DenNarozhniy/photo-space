import { FieldTextEditorComponent } from './components/field-text-editor/field-text-editor.component';
import { InputUcfirstDirective } from './directives/input-ucfirst.directive';
import { InputRangeDirective } from './directives/input-range.directive';
import { InputMaskDirective } from './directives/input-mask.directive';
import { FormHostDirective } from './directives/form-host.directive';
import { FormComponent } from './components/form/form.component';
import { FieldWrapperComponent } from './components/field-wrapper/field-wrapper.component';
import { FieldTextareaComponent } from './components/field-textarea/field-textarea.component';
import { FieldSelectComponent } from './components/field-select/field-select.component';
import { FieldRadioComponent } from './components/field-radio/field-radio.component';
import { FieldInputUcfirstComponent } from './components/field-input-ucfirst/field-input-ucfirst.component';
import { FieldInputRangeComponent } from './components/field-input-range/field-input-range.component';
import { FieldInputMaskComponent } from './components/field-input-mask/field-input-mask.component';
import { FieldInputComponent } from './components/field-input/field-input.component';
import { FieldEmptyWrapperComponent } from './components/field-empty-wrapper/field-empty-wrapper.component';
import { FieldDateComponent } from './components/field-date/field-date.component';
import { FieldCheckboxComponent } from './components/field-checkbox/field-checkbox.component';

export const formsLiteComponents: any[] = [FormComponent];

export const formsLiteEntryComponents: any[] = [
  FieldCheckboxComponent,
  FieldDateComponent,
  FieldEmptyWrapperComponent,
  FieldInputComponent,
  FieldInputMaskComponent,
  FieldInputRangeComponent,
  FieldInputUcfirstComponent,
  FieldTextEditorComponent,
  FieldRadioComponent,
  FieldSelectComponent,
  FieldTextareaComponent,
  FieldWrapperComponent,
];

export const formsLiteDirectives: any[] = [FormHostDirective, InputMaskDirective, InputRangeDirective, InputUcfirstDirective];

export const formsLiteExportComponents: any[] = [FormComponent];
