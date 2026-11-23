import { Component } from '@angular/core';

@Component({
  selector: 'app-ex07-autenticacao',
  styleUrl: './ex07-autenticacao.css',
  templateUrl: './ex07-autenticacao.html',
})
export class Ex07Autenticacao {
  // Único estado do componente: true = logado, false = deslogado
  logado = false;

  // Inverte o estado ao clicar no botão
  alternarLogin() {
    this.logado = !this.logado;
  }
}