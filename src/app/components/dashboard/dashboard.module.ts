import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YearAgoPipe } from 'src/app/common-services/year-ago.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
@NgModule({
  declarations: [DashboardComponent, YearAgoPipe, MoviesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [YearAgoPipe],
})
export class DashboardModule {}
