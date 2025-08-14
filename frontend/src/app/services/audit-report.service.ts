import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class AuditReportService {
  constructor(private http: HttpClient) {}
  getReports(filter: any) { return this.http.get<any[]>('/api/auditReport', { params: filter }); }
  uploadReport(data: FormData) { return this.http.post('/api/auditReport/upload', data); }
  getComments(reportId: number) { return this.http.get<any[]>(`/api/auditComment/${reportId}/comments`); }
  addComment(reportId: number, userId: number, comment: string) {
    return this.http.post(`/api/auditComment/${reportId}/comment`, { user_id: userId, comment });
  }
}