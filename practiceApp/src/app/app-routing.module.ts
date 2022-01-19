import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ResultComponent } from './result/result.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { TeacherComponent } from './teacher/teacher.component';


const appRoutes : Routes = [
  {path:'', redirectTo:'/signup', pathMatch:'full'},
  {path:"signup", component: AuthComponent},
  {path:"student", component: StudentComponent},
  {path:"teacher", component: TeacherComponent},
  {path:"result", component: ResultComponent},
  {path:"subject", component: SubjectComponent},
  {path:"login", component: AuthComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
