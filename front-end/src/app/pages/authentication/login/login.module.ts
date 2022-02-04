import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthModule } from '@features/auth/auth.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, //
    LoginRoutingModule,
    AuthModule,
  ],
})
export class LoginModule {}
