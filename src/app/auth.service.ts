import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import LoginPayload from './interfaces/login.interface';
import RegistrationPayload from './interfaces/registration.interface';

enum AuthEnum {
  apiUrl = 'localhost:5173'
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  public login(payload: LoginPayload){
    this.http.post(AuthEnum.apiUrl, payload);
  }

  public register(payload: RegistrationPayload){
    return this.http.post(AuthEnum.apiUrl, payload);
  }
}
