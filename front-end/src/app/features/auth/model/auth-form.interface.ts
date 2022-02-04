import { AbstractControl, FormGroup } from '@angular/forms';
import { IUser } from './user.interface';

export interface IFormRegister extends FormGroup {
  value: IUser;
  controls: {
    username: AbstractControl;
    email: AbstractControl;
    password: AbstractControl;
    confirmPassword: AbstractControl;
  };
}

export interface IFormLogin extends FormGroup {
  value: Omit<IUser, 'email'>;
  controls: {
    username: AbstractControl;
    password: AbstractControl;
  };
}
