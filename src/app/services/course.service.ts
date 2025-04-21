import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  private apiUrl = 'https://localhost:7095/api/Admin/Course';

  constructor(private httpClient: HttpClient) {}

  // Get all courses
  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.apiUrl}`);
  }

  // Get course by ID
  getCourseById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.apiUrl}/${id}`);
  }

  // Create a new course
  createCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(`${this.apiUrl}`, course);
  }

  // Update an existing course
  updateCourse(course: Course): Observable<Course> {
    const payload = {
      id: course.id,
      name: course.name,
      description: course.description,
      courseCode: course.courseCode,
      credits: course.credits,
      courseDuration: course.courseDuration,
      teacherAssigned: course.teacherId,
      teacherId: course.teacherAssigned
    };
    return this.httpClient.put<Course>(`${this.apiUrl}`, payload);
  }

  updatedCourse(course: Course): Observable<Course> {
      const payload = {
        id: course.id,
        name: course.name,
        description: course.description,
        courseCode: course.courseCode,
        credits: course.credits,
        courseDuration: course.courseDuration,
        teacherAssigned: course.teacherAssigned,
      };
      return this.httpClient.put<Course>(`${this.apiUrl}`, payload);
    }
 
  // Delete a course by ID
  deleteCourse(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}`);
  }
}
