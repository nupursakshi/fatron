import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(private http: HttpClient) {}
  getCompanies() { return this.http.get<any[]>('/api/company'); }
  addCompany(data: any) { return this.http.post('/api/company', data); }
  deleteCompany(id: number) { return this.http.delete(`/api/company/${id}`); }
}