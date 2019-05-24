import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formSignup: FormGroup;

  constructor() {
    this.formSignup = new FormGroup({
      email: new FormControl(''),
      fullname: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
      passwordConfirmation: new FormControl('')
    });
  }

  ngOnInit() {
  }
  getFormData() {
    const data = this.formSignup.value;
    console.log(data);
  }

}
