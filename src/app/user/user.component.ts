import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RoleService } from '../services/role.service';
import { ExistingUser } from '../models/existing-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent implements OnInit {

  roles: any[] = []; 
  newUser: User = new User();
  filteredTeacherList: User[] = [];
  filteredStudentList: User[] = [];
  editUser: User = new User();
  editExistingUser: ExistingUser = new ExistingUser();
  userList: any[] = [];         
  storedResponse: any;          
  storedUserList: any[] = [];

  constructor(private userService: UserService, private fb: FormBuilder, private rolesService: RoleService) {}

  ngOnInit(){
    this.userService.getUsers().subscribe(
      (response) => {
        this.userList = Object.values(response).flat(); 
         this.filteredTeacherList = this.userList.filter(user => user.roleName === 'Teacher');
         this.filteredStudentList = this.userList.filter(user => user.roleName === 'Student');
      this.rolesService.getAllRoles().subscribe(
        (rolesResponse) => {
          this.roles = rolesResponse; 
        },
        (rolesError) => {
          console.error('Failed to load roles:', rolesError);
        }
      );
      },
      (error) => {
        console.log('Unable to access API');
      }
    );
  }

  saveClick() {
this.userService.upsertUser(this.newUser).subscribe(
      (response) => {
        this.ngOnInit();
        this.Clear_Rec();
      },
      (error) => {
        console.log('Unable to call API');
      }
    );
  }

  Clear_Rec() {
    this.newUser.email = '';
    this.newUser.firstName = '';
    this.newUser.gender = '';
    this.newUser.lastName = '';
    this.newUser.password = '';
    this.newUser.phoneNumber = '';
    this.newUser.role = 0;
    this.newUser.roleName = '';
  }

  editClick(user: any) {
    this.editUser = user;
  }

  updateClick() {
    this.userService.upsertUser(this.editUser).subscribe(
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
    this.userService.deleteUser(id).subscribe(
      (response) => {
        this.ngOnInit();
      },
      (error) => {
        console.log('Unable to call API');
      }
    );
  }
  
}