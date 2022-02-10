import { AuthService } from './../../../../../../libs/services/src/lib/api/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  createUser(): void {
    this.authService.register(this.registrationForm.value).subscribe();
  }

}
