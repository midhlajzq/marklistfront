import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {path:'add-student',component:AddStudentComponent},
  {path:'view-student/:id',component:ViewComponent},
  {path:'edit-student/:id',component:EditComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
