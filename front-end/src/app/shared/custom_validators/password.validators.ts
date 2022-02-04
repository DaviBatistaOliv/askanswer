import { FormControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static match(confirmPassword: FormControl): ValidationErrors | null {
    const password = confirmPassword.parent?.get('password');

    if (password?.value === confirmPassword?.value) {
      return null;
    }

    return { not_match: true };
  }
}
