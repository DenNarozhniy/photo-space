import { Validators } from '@angular/forms';
import { FormFieldType } from './../../../../../../libs/dynamic-forms/src/lib/interfaces/form-interface';
import { FormConfig } from '@photo-space/dynamic-forms';
import { Advantage } from './../../../../../../libs/models/src/advantage.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdvantagesFormConfig {

  getConfig(data: Advantage): FormConfig {
    return {
      id: 'advantages-form',
      fields: [
        {
          key: 'title',
          type: FormFieldType.Input,
          label: 'Заголовок',
          defaultValue: data?.title || '',
          attrs: {
            type: 'text',
            placeholder: '',
            id: 'AdvantageTitle',
            name: 'advantage-title'
          },
          validators: [Validators.required],
        },
        {
          key: 'text',
          type: FormFieldType.TextEditor,
          label: 'Описание',
          defaultValue: data?.text || '',
          attrs: {
            id: 'AdvantageText',
          },
          validators: [
            Validators.required,
          ],
        },
        {
          key: 'order',
          type: FormFieldType.Input,
          label: 'Номер порядка',
          defaultValue: data?.order || 0,
          attrs: {
            type: 'number',
            placeholder: 'не установлено',
            id: 'AdvantageOrder',
            name: 'advantage-order'
          }
        },
        {
          key: 'isShow',
          type: FormFieldType.Checkbox,
          label: 'Виден на сайте',
          defaultValue: !!data?.isShow,
          attrs: {
            placeholder: 'не установлено',
            id: 'AdvantageIsShow',
            name: 'advantage-is-show'
          }
        }
      ]
    }
  }
}
