import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { User } from '../models/user';
import * as jwt_decode from 'jwt-decode';
import { Grade } from '../models/grade';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {
  private apiUrl = 'https://localhost:7095/api/Teacher/Teacher';
  constructor(private httpClient: HttpClient) {}

  getUserIdFromToken(): string {
      const token = localStorage.getItem('jwt_token');
      if (token) {
        const decoded: any = jwt_decode.jwtDecode(token);  
        return decoded.nameid;  
      }
      return '';
    }

  // Get all courses taught by the teacher
  getCourses(): Observable<Course[]> {
    const id = this.getUserIdFromToken();
    return this.httpClient.get<Course[]>(`${this.apiUrl}/courses/${id}`);
  }

  getUserById(userId: number): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/user/${userId}`);
  }

  // Get all roles
  getAllRoles(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/getRoles`);
  }

  // Get course and enrollment details to manage students
  getManageStudents(): Observable<any> {
    const id = this.getUserIdFromToken();
    return this.httpClient.get<any>(`${this.apiUrl}/manage-student/${id}`);
  }

  // Delete a student's enrollment in a course
  deleteEnrollment(enrollmentId: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/manage-student/${enrollmentId}`);
  }

  // Upsert user
  upsertUser(user: User): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/upsert`, user);
  }

    // Get user data for upsert (create/update)
    getUserUpsert(id?: number): Observable<any> {
      return this.httpClient.get<any>(`${this.apiUrl}/upsert/${id ? id : ''}`);
    }

    // Upsert grade
  upsertGrade(payload: Grade): Observable<any> {
     //console.log(`${this.apiUrl}/grades`, payload);
     return this.httpClient.post(`${this.apiUrl}/grades`, payload);
  }
}