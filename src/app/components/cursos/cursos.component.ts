import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

import { Curso } from '../../interfaces/curso';
import { CursoService } from '../../services/curso/curso.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos!: Curso[];
  pagina: number = 1;
  subscriptionQueryParams!: Subscription;
  cursosPaginados: Curso[] = [];
  itensPorPagina: number = 10;
  totalPaginas: number = 0;

  constructor(
    private cursoService: CursoService,
    private routeActivate: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    this.totalPaginas = Math.ceil(this.cursos.length / this.itensPorPagina);

    this.subscriptionQueryParams = this.routeActivate.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = parseInt(queryParams['pagina'], 10) || 1;
        this.atualizarCursosPaginados();
      }
    );
  }

  atualizarCursosPaginados() {
    const inicio = (this.pagina - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.cursosPaginados = this.cursos.slice(inicio, fim);
  }


  mudarPagina(pagina: number) {
    this.router.navigate(['/cursos'], { queryParams: { pagina } });
  }

  proxPagina() {
    if (this.pagina < this.totalPaginas) {
      this.mudarPagina(this.pagina + 1);
    }
  }

  ngOnDestroy() {
    this.subscriptionQueryParams.unsubscribe();
  }
}
