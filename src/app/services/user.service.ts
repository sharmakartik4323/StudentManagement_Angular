import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://localhost:7095/api/Admin/User';

  constructor(private httpClient: HttpClient) {}

  // Get all users (students and teachers)
  getUsers(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}`);
  }

  // Delete user by ID
  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Get user data for upsert (create/update)
  getUserUpsert(id?: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/upsert/${id ? id : ''}`);
  }

  // Upsert (create or update) user
  upsertUser(user: User): Observable<User> {
    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      role: user.role,
      password: user.password
    };
    return this.httpClient.post<User>(`${this.apiUrl}/upsert`, payload);
  }
}