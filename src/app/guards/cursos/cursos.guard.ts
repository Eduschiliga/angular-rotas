import { ActivatedRouteSnapshot, CanActivateChildFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export const cursosGuard: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean => {

  return true;
};
