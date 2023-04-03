import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'success', component: SuccessPageComponent },
  { path: 'view', canActivate: [AuthGuard], component: ViewDoctorsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
