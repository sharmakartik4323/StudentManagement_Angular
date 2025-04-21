import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})

export class CourseComponent {

  newCourse: Course = new Course();
  courseList: Course[] = [];
  editCourse: Course = new Course();
  filteredTeacherList: User[] = [];
  userList: any[] = [];
  
  constructor(private courseService: CourseService, private userService: UserService) {}

  GetAll() {
    this.courseService.getCourses().subscribe(
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
    this.userService.getUsers().subscribe(
      (response) => {
        this.userList = Object.values(response).flat();
        this.filteredTeacherList = this.userList.filter(user => user.roleName === 'Teacher');
      },
      (error) => {
        console.log('Unable to access API');
      }
    );
  }

  saveClick() {
    this.courseService.createCourse(this.newCourse).subscribe(
      (response) => {
        this.GetAll();
        this.Clear_Rec();
      },
      (error) => {
        console.log('Unable to call API');
      }
    );
  }

  Clear_Rec() {
    this.newCourse.name = '';
    this.newCourse.description = '';
    this.newCourse.courseCode = '';
    this.newCourse.credits = 0;
    this.newCourse.courseDuration = '';
  }

  editClick(course: any) {
    this.editCourse = course;
  }

  updateClick() {
    this.courseService.updateCourse(this.editCourse).subscribe(
      (response) => {
        this.GetAll();
        this.Clear_Rec();
      },
      (error) => {
        console.log('Unable to access API');
      }
    );
  }

  updatedClick() {
    this.courseService.updatedCourse(this.editCourse).subscribe(
      (response) => {
        this.GetAll();
        this.Clear_Rec();
      },
      (error) => {
        console.log('Unable to access API');
      }
    );
  }
  
  deleteClick(id: number) {
    let ans = window.confirm('Want to delete Data?');
    if (!ans) return;
    this.courseService.deleteCourse(id).subscribe(
      (response) => {
        this.GetAll();
      },
      (error) => {
        console.log('Unable to call API');
      }
    );
  }

}