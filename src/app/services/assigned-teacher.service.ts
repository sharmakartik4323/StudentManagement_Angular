import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})

export class AssignedTeacherService {
  private apiUrl = 'https://localhost:7095/api/Admin/AssignedTeacher';

  constructor(private httpClient: HttpClient) {}

  // Get all courses
  getAllCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.apiUrl}`);
  }

  // Update a course (assign a teacher to the course)
  updateCourse(id: number, course: Course): Observable<Course> {
    return this.httpClient.put<Course>(`${this.apiUrl}/${id}`, course);
  }
}
