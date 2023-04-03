import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  register() {
    this.router.navigateByUrl('/sign-up');
  }

  login() {
    this.router.navigateByUrl('/auth');
  }

  viewDoctor() {
    this.router.navigateByUrl('/view');
  }
}
