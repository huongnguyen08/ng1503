import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formSignup: FormGroup;

  constructor() {
    this.formSignup = new FormGroup({
      email: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]
      ),
      fullname: new FormControl(''),
      phone: new FormControl(''),
      fullAddress: new FormGroup({
        address: new FormControl(''),
        province: new FormControl(''),
      }),
      password: new FormControl(''),
      passwordConfirmation: new FormControl('')
    });
  }

  ngOnInit() {
  }
  getFormData() {
    const data = this.formSignup.value;
    console.log(data);
    // const email = this.formSignup.get('email').value;
    // console.log(email);
  }
  validatorEmail(): boolean {
    const email = this.formSignup.get('email');
    if (email.invalid && email.touched) {
      return false;
    }
    return true;
  }

}
