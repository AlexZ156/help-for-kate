import { NgModule } from '@angular/core';
import { SignupPage } from './components/singup/signup.page';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { SigninPage } from './components/signin/signin.page';
import { CommonModule } from '@angular/common';
import { IconModule } from '../shared/icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    IconModule
  ],
  declarations: [
    SignupPage,
    SigninPage
  ]
})

export class LoginModule {}
