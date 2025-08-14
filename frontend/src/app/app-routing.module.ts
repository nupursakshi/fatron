import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { CompanyManagementComponent } from './components/company-management/company-management.component';
import { ClientManagementComponent } from './components/client-management/client-management.component';
import { AuditReportComponent } from './components/audit-report/audit-report.component';
import { AuditCommentComponent } from './components/audit-comment/audit-comment.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'company-management', component: CompanyManagementComponent },
  { path: 'client-management', component: ClientManagementComponent },
  { path: 'audit-report', component: AuditReportComponent },
  { path: 'audit-comment/:reportId', component: AuditCommentComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'analytics', component: AnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}