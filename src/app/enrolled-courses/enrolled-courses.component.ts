import { Component } from '@angular/core';
import { Enrollment } from '../models/enrollment';
import { CourseService } from '../services/course.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrl: './enrolled-courses.component.scss'
})

export class EnrolledCoursesComponent {

  enrolledCourse: Enrollment[] = [];

  constructor(private courseService: CourseService,private studentService: StudentService) {}

  ngOnInit() {
    this.enrolledClick();
  }

  enrolledClick() {
    this.studentService.getEnrolledCourses().subscribe(
      (response) => {
        this.enrolledCourse = Array.isArray(response) ? response : [response];
      },
      (error) => {
        console.log('Unable to access API');
      }
    )
  }
  
}
