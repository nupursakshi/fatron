import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { CompanyManagementComponent } from './components/company-management/company-management.component';
import { ClientManagementComponent } from './components/client-management/client-management.component';
import { AuditReportComponent } from './components/audit-report/audit-report.component';
import { AuditCommentComponent } from './components/audit-comment/audit-comment.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UserManagementComponent,
    CompanyManagementComponent,
    ClientManagementComponent,
    AuditReportComponent,
    AuditCommentComponent,
    NotificationComponent,
    ScheduleComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [DashboardComponent]
})
export class AppModule {}