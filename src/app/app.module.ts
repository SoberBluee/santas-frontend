import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SantasListComponent } from './santas-list/santas-list.component';
import { SantasListFormComponent } from './santas-list-form/santas-list-form.component';
import { RegistrationFormComponent } from './registration-page/registration-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SantasListComponent,
    SantasListFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageComponent,
    FormsModule,
    ReactiveFormsModule,
    RegistrationFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
