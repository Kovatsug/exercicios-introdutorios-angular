import { Component } from '@angular/core';

@Component({
  selector: 'app-ex03-introducao',
  styleUrl: './ex03-introducao.css',
  templateUrl: './ex03-introducao.html',
})
export class Ex03Introducao {
  // Atributos privados
  private nome = 'Gustavo';
  private idade = 18;
  private cidade = 'Blumenau';
  private profissao = 'Estudante de Java + Angular';
  private hobby = 'Programar';
}