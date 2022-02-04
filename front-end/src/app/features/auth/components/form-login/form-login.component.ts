import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IFormLogin } from '@features/auth/model/auth-form.interface';
import { IUser } from '@features/auth/model/user.interface';

@Component({
  selector: 'akw-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  form!: IFormLogin;

  @Output()
  public readonly formChange = new EventEmitter<Omit<IUser, 'email'>>();

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      username: new FormControl('', [
        Validators.required, //
      ]),
      password: new FormControl('', [
        Validators.required, //
        Validators.min(8),
      ]),
    }) as IFormLogin;
  }

  onFormChange() {}
}
