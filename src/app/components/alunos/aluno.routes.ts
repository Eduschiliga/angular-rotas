import { Routes } from '@angular/router';

import { alunoDetalheResolver } from '../../guards/alunos/aluno-detalhe.resolver';
import { alunosDeactivateGuard } from '../../guards/alunos/alunos-deactivate.guard';
import { alunosGuard } from '../../guards/alunos/alunos.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';

export const ALUNOS_ROUTES: Routes = [
  {path: '', component: AlunosComponent, canActivateChild: [alunosGuard], children: [
    {path: 'novo', component: AlunoFormComponent, canDeactivate: [alunosDeactivateGuard]},
    {path: ':id', component: AlunoDetalheComponent, resolve: {aluno: alunoDetalheResolver}},
    {path: ':id/editar', component: AlunoFormComponent, canDeactivate: [alunosDeactivateGuard]}
  ]},
];
