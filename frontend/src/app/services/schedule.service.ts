import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class ScheduleService {
  constructor(private http: HttpClient) {}
  getSchedules() { return this.http.get<any[]>('/api/schedule'); }
  scheduleAudit(data: any) { return this.http.post('/api/schedule', data); }
}