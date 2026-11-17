import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ex07-autenticacao',
  styleUrl: './ex07-autenticacao.css',
  templateUrl: './ex07-autenticacao.html',
})
export class Ex07Autenticacao {

  logado = false
  estado = "Deslogado"
  logar = "Logar"

  logarDeslogar() {
    this.logado = !this.logado
    this.estado = this.logado ? "Logado" : "Deslogado"
    this.logar = this.logado ? "Deslogar" : "Logar"
  }

}
