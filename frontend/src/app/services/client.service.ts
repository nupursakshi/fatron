import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private http: HttpClient) {}
  getClients() { return this.http.get<any[]>('/api/client'); }
  addClient(data: any) { return this.http.post('/api/client', data); }
  deleteClient(id: number) { return this.http.delete(`/api/client/${id}`); }
}