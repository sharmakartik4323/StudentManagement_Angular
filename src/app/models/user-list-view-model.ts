import { User } from "./user";

export class UserListViewModel {
    students: User[];
    teachers: User[];
  
    constructor() {
      this.students = [];
      this.teachers = [];
    }
  }