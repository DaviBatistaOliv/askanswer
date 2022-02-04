import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FieldsModule } from '@ui/fields/fields.module';
import { ButtonModule } from '@ui/button/button.module';

@NgModule({
  declarations: [
    FormRegisterComponent, //
    FormLoginComponent,
  ],
  imports: [
    CommonModule, //
    FieldsModule,
    ButtonModule,
  ],
  exports: [
    FormRegisterComponent, //
    FormLoginComponent,
  ],
})
export class AuthModule {}
