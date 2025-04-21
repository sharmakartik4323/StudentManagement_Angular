import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { AllEnrollmentsComponent } from './all-enrollments/all-enrollments.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { ViewGradeComponent } from './view-grade/view-grade.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './interceptors/jwt-interceptor.service';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';
import { AssignedCoursesComponent } from './assigned-courses/assigned-courses.component';
import { EnrolledStudentsComponent } from './enrolled-students/enrolled-students.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RoleComponent,
    CourseComponent,
    AllEnrollmentsComponent,
    ViewCoursesComponent,
    ViewGradeComponent,
    EnrolledCoursesComponent,
    AssignedCoursesComponent,
    EnrolledStudentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
