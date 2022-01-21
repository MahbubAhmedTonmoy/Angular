import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ResultComponent } from './result/result.component';
import { StudentComponent } from './student/student.component';
import { SubjectCreateComponent } from './subject/subject-create/subject-create.component';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { SubjectComponent } from './subject/subject.component';
import { TeacherComponent } from './teacher/teacher.component';


const appRoutes : Routes = [
  {path:'', redirectTo:'/signup', pathMatch:'full'},
  {path:"signup", component: AuthComponent},
  {path:"student", component: StudentComponent},
  {path:"teacher", component: TeacherComponent},
  {path:"result", component: ResultComponent},
  {path:"subject", component: SubjectComponent, children:[
    {path:'', component: SubjectListComponent},
    {path:'new', component: SubjectCreateComponent},
    {path:':id', component: SubjectCreateComponent}
  ]},
  {path:"login", component: AuthComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
