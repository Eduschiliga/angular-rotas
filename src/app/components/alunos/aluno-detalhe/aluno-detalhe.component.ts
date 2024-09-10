import { AlunosService } from './../../../services/alunos/alunos.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alunos } from '../../../interfaces/alunos';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
    this.subscriptionAluno = this.route.params.subscribe(
      (params) => {
        let id = parseInt(params['id']);
        this.aluno = this.alunosService.getById(id);
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
