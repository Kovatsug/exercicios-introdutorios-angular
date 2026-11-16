import { Component } from '@angular/core';
import { Ex01Cabecalho } from './ex01-cabecalho/ex01-cabecalho';
import { Ex01AreaCards } from './ex01-area-cards/ex01-area-cards';
import { Ex01Rodape } from './ex01-rodape/ex01-rodape';

@Component({
  imports: [
    Ex01Cabecalho,
    Ex01AreaCards,
    Ex01Rodape
  ],
  selector: 'app-ex01-portfolio',
  styleUrl: './ex01-portfolio.css',
  templateUrl: './ex01-portfolio.html',
})
export class Ex01Portfolio {}