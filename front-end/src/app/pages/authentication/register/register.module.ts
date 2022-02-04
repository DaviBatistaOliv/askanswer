import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { AuthModule } from '@features/auth/auth.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule, //
    RegisterRoutingModule,
    AuthModule,
  ],
})
export class RegisterModule {}
