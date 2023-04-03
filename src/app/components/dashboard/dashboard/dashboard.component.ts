import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpRequestService } from 'src/app/common-services/http-request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  showPassword: boolean = false;
  isDisabled: boolean = false;

  constructor(
    private router: Router,
    private http: HttpRequestService,
    private formBuilder: FormBuilder
  ) {}

  loginForm = this.formBuilder.group({
    username: ['testuser', [Validators.required]],
    password: ['v^4!C%CQ94f0', Validators.required],
  });

  ngOnInit(): void {
    localStorage.clear();
  }

  onSubmit() {
    try {
      // this.isDisabled = true;
      this.http
        .request('post', 'usermodule/login/', this.loginForm.value)
        .subscribe((response: any) => {
          console.log('Response-->', response);
          this.isDisabled = false;
        });
    } catch (error) {}
  }
}
