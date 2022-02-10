import { EventNewFieldWrapperComponent } from './event-new-field-wrapper/event-new-field-wrapper.component';
import { FormConfig, FormFieldType, FormFieldHidePayload } from './../../../../libs/dynamic-forms/src/lib/interfaces/form-interface';
import { Validators } from '@angular/forms';


 export const eventFormConfig: FormConfig = {
  id: 'demo-form',
  fields: [
    {
      key: 'text-editor-key',
      type: FormFieldType.TextEditor,
      label: 'demo.fields.sex',
      defaultValue: '<p>TRRRR</p>',
      attrs: {
        id: 'sexx44',
      },
      validators: [
        Validators.required,
      ],
    },
    {
      key: 'recovery_type',
      type: FormFieldType.Radio,
      label: 'demo.fields.recoveryType',
      attrs: {
        placeholder: 'demo.fields.recoveryType',
        id: 'RecoveryMethod',
        name: 'data[Recovery][method]'
      },
      validators: [Validators.required],
      options: [
        {
          label: 'demo.fields.recoverySelf',
          value: 'self'
        },
        {
          label: 'demo.fields.recoveryWithPhone',
          value: 'sms'
        }
      ],
      defaultValue: 'self'
    },
    {
      key: 'new_password',
      type: FormFieldType.Input,
      label: 'demo.fields.newPassword',
      attrs: {
        type: 'password',
        placeholder: 'demo.fields.newPassword',
        id: 'RecoveryNewPassword',
        name: 'data[Recovery][password]'
      },
      validators: [
        Validators.required,
        Validators.pattern(/^\S*(?=\S{6,30})(?=\S*[a-zA-Zа-яА-ЯёЁ].*[a-zA-Zа-яА-ЯёЁ])(?=\S*[\d].*[\d])\S*$/)
      ],
      hide: (payload: Partial<FormFieldHidePayload>) => {
        return payload.formGroup.get('recovery_type').value !== 'self';
      }
    },
    {
      key: 'confirm_password',
      type: FormFieldType.Input,
      label: 'demo.fields.confirmPassword',
      attrs: {
        type: 'password',
        placeholder: 'demo.fields.confirmPassword',
        id: 'RecoveryConfirmPassword',
        name: 'data[Recovery][re_password]'
      },
      validators: [Validators.required],
      hide: (payload: Partial<FormFieldHidePayload>) => {
        return payload.formGroup.get('recovery_type').value !== 'self';
      }
    },
    {
      key: 'code',
      type: FormFieldType.Input,
      label: 'demo.fields.code',
      attrs: {
        type: 'text',
        placeholder: 'demo.fields.code',
        id: 'RecoveryConfirmCode',
        name: 'data[Recovery][code]'
      },
      validators: [Validators.required, Validators.minLength(4)]
    },
    {
      key: 'expr',
      label: 'demo.fields.period',
      attrs: {
        id: 'cardExpirationMonth',
        wrapperClasses: 'card-expiration'
      },
      fields: [
        {
          key: 'month',
          type: FormFieldType.Select,
          attrs: {
            type: 'password',
            placeholder: '00',
            id: 'cardExpirationMonth',
            name: 'data[Application][credit_card_month]',
            classes: 'form-control_w50'
          },
          options: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
          validators: [Validators.required]
        },
        {
          key: 'year',
          type: FormFieldType.Select,
          attrs: {
            type: 'password',
            placeholder: '00',
            id: 'UserPassword',
            name: 'data[Application][credit_card_number]',
            classes: 'form-control_w50',
            wrapperClasses: ' form-control-seporate form-control-seporate_v1'
          },
          options: (() => {
            const year = parseInt(
              new Date()
                .getFullYear()
                .toString()
                .substring(2),
              10
            );
            const years = [];
            for (let i = 0; i < 11; i++) {
              years[i] = year + i;
            }

            return years;
          })(),
          validators: [Validators.required]
        }
      ]
    }
  ]
};
// export const eventFormConfig: FormConfig = {
//   id: 'new-event',
//   wrapper: EventNewFieldWrapperComponent,
//   fields: [
//     {
//       key: 'title',
//       type: FormFieldType.Input,
//       label: 'events.fields.title',
//       attrs: {
//         type: 'text',
//         id: 'event-title',
//         name: 'event[title]',
//         placeholder: 'events.fields.title'
//       },
//       validators: [Validators.required, Validators.minLength(5)]
//     },
//     {
//       key: 'place',
//       type: FormFieldType.Input,
//       label: 'events.fields.place',
//       attrs: {
//         type: 'text',
//         id: 'event-place',
//         name: 'event[place]',
//         placeholder: 'events.fields.place'
//       },
//       validators: [Validators.required]
//     },
//     {
//       key: 'body',
//       type: FormFieldType.Textarea,
//       label: 'events.fields.body',
//       attrs: {
//         type: 'text',
//         id: 'event-body',
//         name: 'event[body]',
//         placeholder: 'events.fields.body'
//       },
//       validators: [Validators.required, Validators.minLength(50)]
//     },
//     {
//       key: 'owner',
//       type: FormFieldType.Select,
//       label: 'events.fields.owner',
//       attrs: {
//         id: 'event-owner',
//         name: 'event[owner]',
//         placeholder: 'events.fields.owner'
//       },
//       autoSelect: true,
//       options: [{ label: 'Super Admin', value: 1 }],
//       validators: [Validators.required]
//     },
//     {
//       key: 'published',
//       type: FormFieldType.Checkbox,
//       label: 'events.fields.published',
//       attrs: {
//         id: 'event-published',
//         name: 'event[published]'
//       },
//       defaultValue: true,
//       validators: []
//     }
//   ]
// };
