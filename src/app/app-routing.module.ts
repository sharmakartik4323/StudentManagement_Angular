import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';
import { AllEnrollmentsComponent } from './all-enrollments/all-enrollments.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { ViewGradeComponent } from './view-grade/view-grade.component';
import { AppComponent } from './app.component';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';
import { AssignedCoursesComponent } from './assigned-courses/assigned-courses.component';
import { EnrolledStudentsComponent } from './enrolled-students/enrolled-students.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'app', component: AppComponent },
  { path: 'user', component: UserComponent },
  { path: 'course', component: CourseComponent},
  { path: 'role', component: RoleComponent},
  { path: 'allenrollments', component: AllEnrollmentsComponent},
  { path: 'viewcourses', component: ViewCoursesComponent},
  { path: 'viewgrades', component: ViewGradeComponent},
  { path: 'viewenrolled', component: EnrolledCoursesComponent},
  { path: 'assignedcourses', component: AssignedCoursesComponent},
  { path: 'enrolledstudents', component: EnrolledStudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}