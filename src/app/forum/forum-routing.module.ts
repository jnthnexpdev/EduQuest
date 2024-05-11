import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumPageComponent } from './pages/forum-page/forum-page.component';

const routes: Routes = [
  { path: 'inicio', component: ForumPageComponent },
  { path : '', redirectTo : 'inicio', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
