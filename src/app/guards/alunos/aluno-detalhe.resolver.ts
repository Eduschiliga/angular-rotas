import { ResolveFn } from '@angular/router';
import { Alunos } from '../../interfaces/alunos';
import { AlunosService } from '../../services/alunos/alunos.service';
import { inject, Injectable } from '@angular/core';

export const alunoDetalheResolver: ResolveFn<Alunos> = (route, state) => {
  const alunosService = inject(AlunosService);
  const id = route.params['id'];
  const aluno = alunosService.getById(id);

  if(aluno) {
    return aluno;
  }
  return {id: 0, nome: '', email: ''};
};
