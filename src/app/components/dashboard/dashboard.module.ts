import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { YearAgoPipe } from 'src/app/common-services/year-ago.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddComponent } from './templateDesgin/add/add.component';
import { ListComponent } from './templateDesgin/list/list.component';
@NgModule({
  declarations: [
    DashboardComponent,
    ViewDoctorsComponent,
    SuccessPageComponent,
    YearAgoPipe,
    AddComponent,
    ListComponent,
    
  ],
  imports: [CommonModule, DashboardRoutingModule, MatPaginatorModule],
  providers: [YearAgoPipe],
})
export class DashboardModule {}
