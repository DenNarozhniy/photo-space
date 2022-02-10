import { REG_EXP } from './../../../../constants/common-constants';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'ps-send-email-form',
  templateUrl: './send-email-form.component.html',
  styleUrls: ['./send-email-form.component.scss']
})
export class SendEmailFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

   // form example
   // https://stackblitz.com/edit/example-angular-material-reactive-form?file=app%2Fapp.component.ts

  createForm() {
     this.formGroup = this.formBuilder.group({
      email: [null, [ Validators.pattern(REG_EXP.EMAIL)]],
      name: [null, Validators.required],
      description: [null],
    });
  }

  get nameCtl() { return this.formGroup.get('name') as FormControl; }
  get emailCtl() { return this.formGroup.get('email') as FormControl; }

  onSubmit() {
    console.log(this.formGroup.value);
  }

}
