import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})

export class RoleService {
  private apiUrl = 'https://localhost:7095/api/Admin/Role'; 

  constructor(private httpClient: HttpClient) {}

  // Get all roles
  getAllRoles(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}`);
  }

  // Get role by ID
  getRoleById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new role
  createRole(role: Role): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}`, role);
  }

  // Update an existing role
  updateRole(id: number, role: Role): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}/${id}`, role);
  }

  // Delete a role
  deleteRole(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}`);
  }
}
