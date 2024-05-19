import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { ProfileCoursesComponent } from './components/profile-courses/profile-courses.component';
import { CoursesUserPageComponent } from './pages/courses-user-page/courses-user-page.component';

const routes: Routes = [
  { path: 'inicio', component: CoursesPageComponent },
  { path: 'mis-cursos', component: CoursesUserPageComponent },
  { path : '', redirectTo : 'inicio', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
