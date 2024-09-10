import { Injectable } from '@angular/core';
import { Alunos } from '../../interfaces/alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private alunos: Alunos[] = [];

  constructor() {
    this.generateAlunos();
  }

  private generateAlunos() {
    for (let i = 1; i <= 10; i++) {
      this.alunos.push({
        id: i,
        nome: `Aluno ${i}`,
        email: `aluno${i}@alunos.angular.com`
      });
    }
  }

  getAll(): Alunos[] {
    return this.alunos;
  }

  getById(id: number) {
    return this.alunos.find(aluno => aluno.id == id);
  }
}
