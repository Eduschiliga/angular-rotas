import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
  ) { }

  fazerLogin(usuario: Usuario) {
    if(usuario.nome === 'admin' && usuario.senha === 'admin') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  isAutenticado(): boolean {
    return this.usuarioAutenticado;
  }
}
