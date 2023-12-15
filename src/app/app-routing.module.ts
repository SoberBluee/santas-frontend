import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationFormComponent } from './registration-page/registration-page.component';
import { SantasListComponent } from './santas-list/santas-list.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent },
  {path: 'register', component: RegistrationFormComponent},
  {path: 'santas-list', component: SantasListComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

