import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {

  public constructor(private router: Router){}

  public loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  public onSubmit(){

  }

  public navigateToRegisterPage(){
    this.router.navigate(['/register']);
  }

}
