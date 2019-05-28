import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    console.log(AC);
    const newPass = AC.get('newPass').value;
    const confirmPass = AC.get('confirmPass').value;
    if (newPass !== confirmPass) {
      return {notMatch: true};
    } else {
      return null;
    }
  }
}
