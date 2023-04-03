import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import routing module..
import { AuthRountingModule } from './auth-routing.module';
// initialise auth components..
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgOtpInputModule } from 'ng-otp-input';
// import share module..

console.log('auth module loaded');

@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRountingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgOtpInputModule,
  ],
})
export class AuthModule {}
