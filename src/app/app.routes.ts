import { Routes } from '@angular/router';

import { CursoDetalheComponent } from './components/cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './components/cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cursos',
    component: CursosComponent,
  },
  {
    path: 'curso/:id',
    component: CursoDetalheComponent,
  },
  {
    path: 'naoEncontrado',
    component: CursoNaoEncontradoComponent,
  },
  {
    path: 'alunos',
    loadChildren: () => import('./components/alunos/aluno.routes').then(r => r.ALUNOS_ROUTES)
  }
];

