import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { Enrollment } from '../models/enrollment';
import { Grade } from '../models/grade';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private apiUrl = 'https://localhost:7095/api/Student/Student';  
  constructor(private httpClient: HttpClient) {}

  // Get all available courses
  getAllCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.apiUrl}/courses`);
  }

  // Get all enrollments (Admin only)
  getAllEnrollments(): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>(`${this.apiUrl}/enrollments`);
  }

  // Enroll the student in a course
  enrollInCourse(courseId: number, userId: string): Observable<any> {
    userId = this.getUserIdFromToken();
    return this.httpClient.post(`${this.apiUrl}/enroll/${courseId}/${userId}`, {});
  }

  // Get all courses the student is enrolled in
  getEnrolledCourses(): Observable<Enrollment[]> {
    const id = this.getUserIdFromToken();
    return this.httpClient.get<Enrollment[]>(`${this.apiUrl}/enrolled/${id}`);
  }

  getUserIdFromToken(): string {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      const decoded: any = jwt_decode.jwtDecode(token);  
      return decoded.nameid;  
    }
    return '';
  }
  
  // Get grades of the student
  getGrades(): Observable<Grade[]> {
    const id = this.getUserIdFromToken();
    return this.httpClient.get<Grade[]>(`${this.apiUrl}/grades/${id}`);
  }
}
