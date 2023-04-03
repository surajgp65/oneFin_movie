import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpRequestService } from 'src/app/common-services/http-request.service';
import { CONSTANTS } from 'src/app/constants/global-constant';
import { SignupUser } from './sign-in';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  patternnum = CONSTANTS.PATTERNS.number;
  setDetails: boolean = true;
  setPassword = '';
  confirmPassword = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  OTPData: any;
  email: any;
  signUp: SignupUser = {
    id: 0,
    email: '',
    mobile: '',
    fullName: '',
    otp: 0,
    password: '',
  };

  successPage = false;

  constructor(
    private http: HttpRequestService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  registerform = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', Validators.required],
    name: ['', Validators.required],
    password: [
      '',
      [Validators.required, Validators.minLength(8), this.checkPassword],
    ],
    comparePass: [
      '',
      [Validators.required, Validators.minLength(8), this.checkPassword],
    ],
    otp: this.autogenrated(),
    practicing_since: Math.floor(10 + Math.random() * 90),
    fees: {
      online: Math.floor(1000 + Math.random() * 9000),
      on_site: Math.floor(1000 + Math.random() * 9000),
    },
  });

  autogenrated() {
    var val = Math.floor(100000 + Math.random() * 900000);
    return val;
  }

  //** Validating Number */
  numbersOnlyValidator(event: any) {
    const pattern = this.patternnum;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, '');
    }
  }

  setPasswordData(data: any) {
    if (
      this.registerform.controls['email'].valid &&
      this.registerform.controls['mobile'].valid &&
      this.registerform.controls['name'].valid
    ) {
      this.setDetails = false;
    } else {
      this.setDetails = true;
    }
  }

  register(data: any) {
    if (data.value.password === data.value.comparePass) {
      let rqData = {
        email: this.registerform.controls['email'],
        mobile: this.registerform.controls['mobile'],
        name: this.registerform.controls['name'],
        password: this.registerform.controls['password'],
        otp: this.autogenrated(),
      };

      console.log('rqData-->', rqData);

      this.http
        .request('post', 'users', this.registerform.value)
        .subscribe((res: any) => {
          console.log('Response', res);
          this.router.navigateByUrl('/success');
        });
    } else {
      this.getErrorComparePassword('err');
      alert('Password is not same');
    }
  }

  checkPassword(control: any) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return !passwordCheck.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }

  getErrorPassword() {
    return this.registerform.get('password')?.hasError('required')
      ? 'Field is required (at least eight characters, one uppercase letter and one number)'
      : this.registerform.get('password')?.hasError('requirements')
      ? 'Password needs to be at least eight characters, one uppercase letter and one number'
      : '';
  }

  getErrorComparePassword(err: any) {
    if (err == 'err') {
      return 'Password is not Same';
    } else {
      return this.registerform.get('comparePass')?.hasError('required')
        ? 'Field is required (at least eight characters, one uppercase letter and one number)'
        : this.registerform.get('comparePass')?.hasError('requirements')
        ? 'Password needs to be at least eight characters, one uppercase letter and one number or not same'
        : '';
    }
  }
}
