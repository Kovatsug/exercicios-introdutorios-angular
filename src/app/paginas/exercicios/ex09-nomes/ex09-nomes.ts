import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ex09-nomes',
  styleUrl: './ex09-nomes.css',
  templateUrl: './ex09-nomes.html',
})
export class Ex09Nomes {
  // Atributos
  nome: string = '';
  nomes: string[] = [];

  // Método para adicionar nome
  adicionar(): void {
    const nomeLimpo = this.nome.trim();
    if (nomeLimpo === '') {
      return; // não cadastra nome vazio
    }
    this.nomes.push(nomeLimpo);
    this.nome = ''; // limpa o campo
  }
}