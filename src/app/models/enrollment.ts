export class Enrollment {
    id: number;
    userId: number | null;
    courseId: number | null;
    enrollmentDate: Date | null;
    courseName: string;
    userName: string;
    teacherId: number | null;
  
    constructor() {
      this.id = 0;
      this.userId = null;
      this.courseId = null;
      this.enrollmentDate = null;
      this.courseName = '';
      this.userName = '';
      this.teacherId = null;
    }
  }
