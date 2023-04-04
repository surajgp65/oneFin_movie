import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(
    private darkModeService: DarkModeService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onToggle(): void {
    this.darkModeService.toggle();
  }

  //** Navigate to login component */
  backToLogin() {
    localStorage.clear();
    this.route.navigateByUrl('/');
  }
}
