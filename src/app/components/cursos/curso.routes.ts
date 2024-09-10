import { Routes } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';


export const CURSOS_ROUTES: Routes = [
  {path: '', component: CursosComponent},
  {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  {path: ':id', component: CursoDetalheComponent},
];
