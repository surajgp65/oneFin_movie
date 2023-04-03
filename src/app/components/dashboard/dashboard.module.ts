import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YearAgoPipe } from 'src/app/common-services/year-ago.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [DashboardComponent, YearAgoPipe],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
  providers: [YearAgoPipe],
})
export class DashboardModule {}
