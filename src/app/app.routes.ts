import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth/auth.guard';
import { cursosGuard } from './guards/cursos/cursos.guard';
import { Pag404Component } from './components/pag404/pag404/pag404.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./components/cursos/curso.routes').then((r) => r.CURSOS_ROUTES),
    canActivate: [authGuard],
    canActivateChild: [cursosGuard],
    canLoad: [authGuard],
  },
  {
    path: 'alunos',
    loadChildren: () =>
    import('./components/alunos/aluno.routes').then((r) => r.ALUNOS_ROUTES),
    canActivate: [authGuard],
    canLoad: [authGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    canLoad: [authGuard],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Pag404Component,
  }
];
