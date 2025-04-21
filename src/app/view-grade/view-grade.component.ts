import { Component } from '@angular/core';
import { Grade } from '../models/grade';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-view-grade',
  templateUrl: './view-grade.component.html',
  styleUrl: './view-grade.component.scss'
})
export class ViewGradeComponent {

  grade: Grade[] = [];
  
  constructor(private studentService: StudentService) {}

  GetAll() {
    this.studentService.getGrades().subscribe(
      (response) => {
        this.grade = response;
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