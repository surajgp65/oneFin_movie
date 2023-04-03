import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../common-services/http-request.service';
import { AuthInfoService } from '../common-services/auth-info.service';
import { Router } from '@angular/router';
import { CONSTANTS } from '../constants/global-constant';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  patternnum = CONSTANTS.PATTERNS.number;
  emailpattern = CONSTANTS.PATTERNS.email;

  showOtp: boolean = false;
  mobileNo = '';
  email = '';
  OTPdata = '';
  userData: any;
  validUser: boolean = false;

  constructor(
    private http: HttpRequestService,
    private router: Router,
    private authInfo: AuthInfoService
  ) {}

  ngOnInit(): void {
    this.authInfo.loggedUser();
    this.getUserData();
  }

  // getting user data
  getUserData() {
    try {
      this.http.request('get', 'users', null).subscribe((response: any) => {
        this.userData = response;
      });
    } catch (error) {}
  }

  // send otp after filling detials
  sendOtp(data: any) {
    return this.userData.find((item: any) => {
      if (
        item.email === data.value.email &&
        item.mobile === data.value.mobile
      ) {
        this.showOtp = true;
        return;
      } else {
        // this.showOtp = false;
        // alert('User is not registerd !!!');
      }
    });
  }

  // checking otp on change event
  onOtpChange(event: any) {
    if (event.length == 6) {
      return this.userData.find((item: any) => {
        if (
          item.mobile === this.mobileNo &&
          item.email === this.email &&
          item.otp.toString() == event
        ) {
          this.validUser = true;
          return;
        } else {
          // this.validUser = false;
          // alert('User no found !!!');
        }
      });
    }
  }

  // navigate to view doctor page
  login() {
    if (this.validUser) {
      let fakeToken = this.fakeToken(Math.floor(10 + Math.random() * 90));

      localStorage.setItem('token', fakeToken); // fake token for login
      this.router.navigateByUrl('/view');
    }
  }

  //** Validating Number */
  numbersOnlyValidator(event: any) {
    const pattern = this.patternnum;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, '');
    }
  }

  //** Creating AlphaNumeric fake token for login */
  fakeToken(length: number) {
    console.log('length -->', length);

    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
