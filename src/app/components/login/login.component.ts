import { Usuario } from './../../interfaces/usuario';
import { AuthService } from './../../services/login/auth.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  protected usuario: Usuario = {nome: '', senha: ''};

  constructor(
    private authService: AuthService
  ) { }

  login() {
    this.authService.fazerLogin(this.usuario);
  }
}
