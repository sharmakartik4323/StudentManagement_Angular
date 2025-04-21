import { Component } from '@angular/core';
import { Enrollment } from '../models/enrollment';
import { TeacherService } from '../services/teacher.service';
import { RoleService } from '../services/role.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Grade } from '../models/grade';

@Component({
  selector: 'app-enrolled-students',
  templateUrl: './enrolled-students.component.html',
  styleUrl: './enrolled-students.component.scss'
})

export class EnrolledStudentsComponent {

  editUser: Enrollment | null = null;
  enrollList: Enrollment[] = [];
  roles: any[] = []; 
  newUser: User = new User();
  userRecord: User = new User(); 
  userEnrollment: Enrollment = new Enrollment(); 
  userGrade: Grade = new Grade();

  constructor(private router: Router, private teacherService: TeacherService, private roleService: RoleService, private userService: UserService) {}

  GetAll() {
    this.teacherService.getManageStudents().subscribe(
      (response) => {
        var res = Array.isArray(response) ? response : [response];
        var result = res.flat();
        this.enrollList = result.flat();
      },
      (error) => {
        console.log('Unable to access API');
      }
    );
    this.roleService.getAllRoles().subscribe(
      (roleResponse) => {
        this.roles = roleResponse; 
      },
      (rolesError) => {
        console.error('Failed to load roles:', rolesError);
      }
    );
  }
  
  ngOnInit() {
    this.GetAll();
  }

  editClick(enrollment: any) {
    this.editUser = enrollment;
    this.getUser();
  }

  manageGrade(enrollment: any){
    this.userEnrollment = enrollment;
    console.log(enrollment);
    console.log(this.userEnrollment);
  }

  Clear_Rec() {
    this.userRecord.email = '';
    this.userRecord.firstName = '';
    this.userRecord.gender = '';
    this.userRecord.lastName = '';
    this.userRecord.password = '';
    this.userRecord.phoneNumber = '';
    this.userRecord.role = 0;
    this.userRecord.roleName = '';
  }

  getUser() {
    const userId = this.editUser?.userId;
    if (userId != null) { 
      this.teacherService.getUserById(userId).subscribe(
        (response) => {
          var userstr = JSON.stringify(response);
          this.userRecord =  JSON.parse(userstr);
        },
        (error) => {
          console.log('Unable to access API');
        }
      );
    } else {
      console.log('User ID is not defined');
    }
  }
  
  updateClick() {
    this.teacherService.upsertUser(this.userRecord).subscribe(
      (response) => {
        this.ngOnInit();
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
    this.teacherService.deleteEnrollment(id).subscribe(
      (response) => {
        this.GetAll();
      },
      (error) => {
        console.log('Unable to call API');
      }
    );
  }

  gradesClick(userId: number | null, grade1: any, enrollmentId: number | null){
    const payload = {
      id: 0,
      grade1: grade1,
      enrollmentId: userId
    };
    this.teacherService.upsertGrade(payload).subscribe(
      (response) => {
        this.ngOnInit();
        alert('Grade updated successfully!');
      },
      (error) => {
        console.log('Unable to access API');
      }
    );
  }

}
