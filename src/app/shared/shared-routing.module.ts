import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
  

const routes: Routes = [

    { path: 'perfil', component: ProfileComponent },
    { path: 'ajustes', component:SettingsComponent },
    { path : '', redirectTo : 'inicio', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }






