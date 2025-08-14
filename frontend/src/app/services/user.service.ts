import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers() { return this.http.get<any[]>('/api/user'); }
  disableUser(id: number) { return this.http.put(`/api/user/${id}/disable`, {}); }
}