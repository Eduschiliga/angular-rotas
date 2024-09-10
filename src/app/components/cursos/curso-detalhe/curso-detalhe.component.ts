import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Curso } from '../../../interfaces/curso';
import { CursoService } from '../../../services/curso/curso.service';

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss'
})
export class CursoDetalheComponent implements OnInit {
  protected idCurso = '';
  inscribeRouteCourse!: Subscription;
  protected curso: Curso | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService
  ) {
  }

  ngOnInit() {
    this.inscribeRouteCourse = this.route.params.subscribe((params) => {
      this.idCurso = params['id'];
      this.curso = this.cursoService.findCursoById(parseInt(this.idCurso));

      if(!this.curso) {
        this.router.navigate(['/naoEncontrado']);
      }
    });
  }

  ngOnDestroy() {
    this.inscribeRouteCourse.unsubscribe();
  }
}
