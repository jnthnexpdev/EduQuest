import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CoursesUserPageComponent } from './pages/courses-user-page/courses-user-page.component';
import { CoursesContentPageComponent } from './pages/courses-content-page/courses-content-page.component';
import { CoursesClassPageComponent } from './pages/courses-class-page/courses-class-page.component';

const routes: Routes = [
  { path: 'inicio', component: CoursesPageComponent },
  { path: 'mis-cursos', component: CoursesUserPageComponent },
  { path: 'contenido', component: CoursesContentPageComponent },
  { path: 'contenido/clase', component: CoursesClassPageComponent},
  { path : '', redirectTo : 'inicio', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
