import { MATERIAL_COLUMN_TYPE } from './../../../../../libs/constants/dynamic-mat-table.constants';
import { MatTableWpMap } from './../../../../../libs/dynamic-mat-table/src/lib/interfaces/table-interfaces';
import { Validators } from '@angular/forms';
import { FormConfig, FormFieldType } from '../../../../../libs/dynamic-forms/src/lib/interfaces/form-interface';
import { Advantage } from '../../../../../libs/models/src/advantage.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdvantageConfig {
  getTableDataConfig() : MatTableWpMap[] {
    return [
      {
        key: 'title',
        label: 'Заголовок',
        cell: (element: Advantage) => `${element.title}`,
        type: MATERIAL_COLUMN_TYPE.TEXT
      }, {
        key: 'text',
        label: 'Описание',
        cell: (element: Advantage) => `${element.text}`,
        type: MATERIAL_COLUMN_TYPE.TEXT
      }, {
        key: 'isShow',
        label: 'Опубликовано',
        cell: (element: Advantage) => `${element.isShow}`,
        type: MATERIAL_COLUMN_TYPE.CHECKBOX
      },{
        key: 'options',
        label: '',
        cell: null,
        type: MATERIAL_COLUMN_TYPE.OPTIONS,
        availableOptions: {
          delete: true,
          edit: true
        }
      }
    ];
  }

  getFormConfig (data: Advantage): FormConfig {
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
