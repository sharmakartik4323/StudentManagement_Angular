import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { StudentService } from '../services/student.service';
import { Enrollment } from '../models/enrollment';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrl: './view-courses.component.scss'
})

export class ViewCoursesComponent {

  courseList: Course[] = [];
  enrolledCourse: Enrollment[] = [];
  res: string = '';

  constructor(private courseService: CourseService,private studentService: StudentService) {}

  GetAll() {
    this.studentService.getAllCourses().subscribe(
      (response) => {
        this.courseList = response;
      },
      (error) => {
        console.log('Unable to access API');
      }
    );
  }

  ngOnInit() {
    this.GetAll();
  }

  enrolledClick() {
    this.studentService.getEnrolledCourses().subscribe(
      (response) => {
        this.enrolledCourse = response;
      },
      (error) => {
        console.log('Unable to access API');
      }
    )
  }

  enrollNow(courseId: number, userId: string){
    const confirmed = window.confirm(`Are you sure you want to enroll ?`);
    if (confirmed) {
    this.studentService.enrollInCourse(courseId, userId).subscribe(
      (response) => {
        this.res = 'Enrolled Successfully';
      },
      (error) => {
        console.log('Unable to access API');
      }
    )
    }
  }
  
}
