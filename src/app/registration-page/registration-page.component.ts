// registration-form.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import LoginPayload from '../interfaces/login.interface';
import { HttpClientModule } from '@angular/common/http';

export interface RegistrationForm{
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
}

@Component({
  selector: 'app-registration-form',
  standalone: true,
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
  imports: [ReactiveFormsModule, HttpClientModule]
})

export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator()]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  public passwordValidator() {
    return (control: any) => {
      if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(control.value)) {
        return { invalidPassword: true };
      }
      return null;
    };
  }

  public getErrorMessage(): string{
    const registrationControl = this.registrationForm.get('password') ?? null;
    if(!registrationControl) return 'Form is null';

    if (registrationControl.hasError('required')) {
      return 'Password is required.';
    }

    if (registrationControl.hasError('invalidPassword')) {
      return 'Password must have at least 1 character, a minimum of 6 characters, and at least 1 symbol.';
    }

    return '';
  }

  onSubmit() {
    const formValues: RegistrationForm = this.registrationForm.value;
    if(formValues.confirmPassword !== formValues.password) return;
    console.log('form request');
    this.authService.register(formValues).pipe().subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }
}
