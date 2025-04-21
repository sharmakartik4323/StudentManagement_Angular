import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-assigned-courses',
  templateUrl: './assigned-courses.component.html',
  styleUrl: './assigned-courses.component.scss'
})

export class AssignedCoursesComponent {
  
  courseList: Course[] = [];

  constructor(private courseService: CourseService, private teacherService: TeacherService) {}

  GetAll() {
    this.teacherService.getCourses().subscribe(
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
  
}