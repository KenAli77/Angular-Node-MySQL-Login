import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(): void {
    // creating form
    this.signupForm = this.createFormGroup()

  }

  createFormGroup() {
    // creating form group and validation parameters
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    })
  }

  signup():void {

    console.log(this.signupForm.value)

  }

}
