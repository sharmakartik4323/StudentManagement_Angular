import { Course } from "./course";
import { User } from "./user";

export class AssignedTeacher {
    id: number;
    teacherId: number | null;
    courseId: number | null;
    courseName: string;
    teacherName: string;
    course: Course;
    teacher: User;
    user: User;
    courses: Course;
  
    constructor() {
      this.id = 0;
      this.teacherId = null;
      this.courseId = null;
      this.courseName = '';
      this.teacherName = '';
      this.course = new Course();  
      this.teacher = new User();  
      this.user = new User();      
      this.courses = new Course(); 
    }
  }