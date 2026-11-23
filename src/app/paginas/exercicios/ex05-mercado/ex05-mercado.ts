import { Component } from '@angular/core';
import { Mercado } from './mercado';

@Component({
  imports: [],
  selector: 'app-ex05-mercado',
  styleUrl: './ex05-mercado.css',
  templateUrl: './ex05-mercado.html',
})
export class Ex05Mercado {
  // Atributos privados
  private unidadeDeBlumenau: Mercado = {
    nome: 'Mercado Blumenau',
    macasVendidasAno: 15000,
    precoMaca: 3.50,
    laranjasVendidasAno: 8000,
    precoLaranja: 4.20,
  };

  private unidadeDeJoinville: Mercado = {
    nome: 'Mercado Joinville',
    macasVendidasAno: 12000,
    precoMaca: 3.80,
    laranjasVendidasAno: 6500,
    precoLaranja: 4.50,
  };

  private unidadeDeFlorianopolis: Mercado = {
    nome: 'Mercado Florianópolis',
    macasVendidasAno: 18000,
    precoMaca: 3.20,
    laranjasVendidasAno: 9500,
    precoLaranja: 4.00,
  };
}