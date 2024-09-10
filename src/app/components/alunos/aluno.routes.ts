import { Routes } from '@angular/router';

import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';

export const ALUNOS_ROUTES: Routes = [
  {path: '', component: AlunosComponent,},
  {path: 'novo', component: AlunoFormComponent},
  {path: ':id', component: AlunoDetalheComponent},
  {path: ':id/editar', component: AlunoFormComponent},
];
