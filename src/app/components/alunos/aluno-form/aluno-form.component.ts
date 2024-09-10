import { FormCandeactivate } from './../../../interfaces/form-candeactivate';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { AlunosService } from '../../../services/alunos/alunos.service';
import { Subscription } from 'rxjs';
import { Alunos } from '../../../interfaces/alunos';
import { Form, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent implements FormCandeactivate {
  protected aluno: Alunos | undefined = {id: 0, nome: '', email: ''};
  protected subscriptionAluno!: Subscription;
  protected formMudou: boolean = false;
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

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  canChangeRoute() {
    if(this.formMudou) {
      return confirm('Tem certeza que deseja sair dessa página? Quaisquer modificações não serão salvas.');
    }
    return true;
  }

  canDeactivate(): boolean {
    return this.canChangeRoute();
  }

  ngOnDestroy(): void {
    this.subscriptionAluno.unsubscribe();
  }
}
