import { CanDeactivateFn } from '@angular/router';
import { FormCandeactivate } from '../../interfaces/form-candeactivate';

export const alunosDeactivateGuard: CanDeactivateFn<FormCandeactivate> = (component, currentRoute, currentState, nextState) => {
  console.log('Guarda de desativação de alunos');
  console.log(component);
  console.log(currentRoute);
  console.log(currentState);
  console.log(nextState);


  return component.canDeactivate();
};
