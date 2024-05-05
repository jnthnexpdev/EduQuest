import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'inicio',
        loadComponent : () => import('./home/pages/home-page/home-page.component').then(c => c.HomePageComponent)
    },
    {
        path : 'cursos',
        loadChildren : () => import('./courses/courses.module').then(m => m.CoursesModule)
    },
    {
        path : 'foro',
        loadChildren : () => import('./forum/forum.module').then(m => m.ForumModule)
    },
    {
        path : 'administradores',
        loadChildren : () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path : '',
        redirectTo : '/inicio',
        pathMatch : 'full'
    }
];