import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Alunos } from '../../interfaces/alunos';
import { AlunosService } from './../../services/alunos/alunos.service';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [
    CommonModule,
    AlunoDetalheComponent,
    AlunoFormComponent,
    RouterModule,
    FormsModule
  ],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss'
})
export class AlunosComponent {
  protected alunos: Alunos[];

  constructor(
    private alunosService: AlunosService
  ) {
    this.alunos = this.alunosService.getAll();
  }
}
