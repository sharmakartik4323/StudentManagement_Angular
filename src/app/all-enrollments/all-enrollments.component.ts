import { Component } from '@angular/core';
import { Enrollment } from '../models/enrollment';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-all-enrollments',
  templateUrl: './all-enrollments.component.html',
  styleUrl: './all-enrollments.component.scss'
})

export class AllEnrollmentsComponent {

  enrollmentsList: Enrollment[] = [];

  constructor(private studentService: StudentService) {}
  
  GetAll() {
    this.studentService.getAllEnrollments().subscribe(
      (response) => {
        this.enrollmentsList = response;
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
