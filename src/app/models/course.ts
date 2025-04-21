import { AssignedTeacher } from "./assigned-teacher";
import { Enrollment } from "./enrollment";

export class Course {
    id: number;
    name: string;
    description: string;
    courseCode: string;
    credits: number;
    courseDuration: string;
    teacherAssigned: string | null;
    teacherId: number | null;
    assignedTeachers: AssignedTeacher[];
    enrollments: Enrollment[];
  
    constructor() {
      this.id = 0;
      this.name = '';
      this.description = '';
      this.courseCode = '';
      this.credits = 0;
      this.courseDuration = '';
      this.teacherAssigned = null;
      this.teacherId = null;
      this.assignedTeachers = [];
      this.enrollments = [];
    }
  }
