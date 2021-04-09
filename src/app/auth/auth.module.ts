import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {EmailService} from './_services/email-service';
import {AuthService} from './_services/auth.service';
import {SharedModule} from '../@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    EmailService,
    AuthService,
  ]
})
export class AuthModule {
}
