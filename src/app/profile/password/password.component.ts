import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      newPass: ['', Validators.required],
      confirmPass: ['', Validators.required]
    });
  }

  onSubmit() {

  }

}
