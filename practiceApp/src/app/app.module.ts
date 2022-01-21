import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { ResultComponent } from './result/result.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectCreateComponent } from './subject/subject-create/subject-create.component';
import { AuthInterceptorService } from './auth/auth.interceptor.service';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { SingleSubjectComponent } from './subject/single-subject/single-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AuthComponent,
    StudentComponent,
    SubjectComponent,
    ResultComponent,
    TeacherComponent,
    SubjectCreateComponent,
    SubjectListComponent,
    SingleSubjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
