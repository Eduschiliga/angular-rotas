import { CanActivateChildFn } from '@angular/router';

export const alunosGuard: CanActivateChildFn = (childRoute, state) => {
  if (state.url.includes('editar')) {
   // alert('Usuário sem acesso');
    //return false;
  }
  return true;
};
