import { AssignedTeacher } from "./assigned-teacher";
import { Enrollment } from "./enrollment";
import { Role } from "./role";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phoneNumber: string;
    role: number;
    roleName: string;
    password: string;
    otp: string | null;
    expirationTime: Date | null;
    assignedTeachers: AssignedTeacher[];
    enrollments: Enrollment[];
    roleNavigation: Role;
  
    constructor() {
      this.id = 0;
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.gender = '';
      this.phoneNumber = '';
      this.role = 0;
      this.roleName = '';
      this.password = '';
      this.otp = null;
      this.expirationTime = null;
      this.assignedTeachers = [];
      this.enrollments = [];
      this.roleNavigation = new Role(); 
    }
  }
  