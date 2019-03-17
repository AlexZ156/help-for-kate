import { NgModule } from '@angular/core';
import { SignupPage } from './components/singup/signup.page';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { SigninPage } from './components/signin/signin.page';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [
    SignupPage,
    SigninPage
  ]
})

export class LoginModule {}
