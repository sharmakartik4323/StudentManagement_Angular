import { Enrollment } from "./enrollment";
import { User } from "./user";

export class TeacherUpdateVM {
    user: User;
    enrollment: Enrollment;
  
    constructor() {
      this.user = new User();        
      this.enrollment = new Enrollment();  
    }
  }