import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ex08-imagem',
  styleUrl: './ex08-imagem.css',
  templateUrl: './ex08-imagem.html',
})
export class Ex08Imagem {
  // Atributos
  url: string = '';
  erro: boolean = false;
  jogo: string = ''

  // Método chamado quando a imagem carrega com sucesso
  imagemCarregou(): void {
    this.erro = false;
  }

  // Método chamado quando a imagem falha ao carregar
  imagemFalhou(): void {
    this.erro = true;
  }

  // Método chamado quando o usuário digita uma nova URL
  mudouUrl(): void {
    this.erro = false;
  }
}