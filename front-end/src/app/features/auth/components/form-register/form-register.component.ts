import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IFormRegister } from '@features/auth/model/auth-form.interface';
import { IUser } from '@features/auth/model/user.interface';
import { PasswordValidators } from '@shared/custom_validators/password.validators';

@Component({
  selector: 'akw-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  form!: IFormRegister;

  @Output()
  private formChange = new EventEmitter<IUser>();

  constructor(protected _cd: ChangeDetectorRef, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      username: new FormControl('', [
        Validators.required, //
        Validators.minLength(6),
      ]),

      email: new FormControl('', [
        Validators.required, //
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),

      password: new FormControl('', [
        Validators.required, //
        Validators.minLength(7),
        Validators.maxLength(35),
      ]),

      confirmPassword: new FormControl('', {
        validators: [
          Validators.required, //
          Validators.minLength(6),
          PasswordValidators.match,
        ],
        updateOn: 'blur',
      }),
    }) as IFormRegister;

    this._cd.detectChanges();
  }

  onFormChange(): void {
    this.formChange.emit(this.form.value);
  }
}
