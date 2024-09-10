import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { info } from 'console';
import { Subscription } from 'rxjs';

import { Alunos } from '../../../interfaces/alunos';
import { AlunosService } from './../../../services/alunos/alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.scss'
})
export class AlunoDetalheComponent implements OnDestroy, OnInit {
  protected aluno: Alunos | undefined;
  protected subscriptionAluno!: Subscription;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    /*this.subscriptionAluno = this.route.params.subscribe(
      (params) => {
        let id = parseInt(params['id']);
        this.aluno = this.alunosService.getById(id);
      }
    );*/

    this.subscriptionAluno = this.route.data.subscribe(
      (info) => {
        this.aluno = info['aluno'];
      }
    );
  }

  backPage() {
    this.router.navigate(['/alunos']);
  }

  editContato() {
    this.router.navigate(['/alunos', this.aluno?.id, 'editar']);
  }

  ngOnDestroy(): void {
    this.subscriptionAluno.unsubscribe();
  }
}
