import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from '../../shared/validators/match-password.validator';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      oldPass: ['', Validators.required],
      passwordConfirmation: this.fb.group({
        newPass: ['', Validators.required],
        confirmPass: ['', Validators.required]
      }, { validators: [PasswordValidation.MatchPassword]})
    });

    this.passwordForm.valueChanges.subscribe((someStuff) => console.log(this.passwordForm.get('passwordConfirmation')));
  }

  onSubmit() {

  }

}
