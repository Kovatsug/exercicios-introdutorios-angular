import { Component } from '@angular/core';
import { Ex02Cabecalho } from './ex02-cabecalho/ex02-cabecalho';
import { Ex02Menu } from './ex02-menu/ex02-menu';
import { Ex02Conteudo } from './ex02-conteudo/ex02-conteudo';
import { Ex02Rodape } from './ex02-rodape/ex02-rodape';

@Component({
  imports: [
    Ex02Cabecalho,
    Ex02Menu,
    Ex02Conteudo,
    Ex02Rodape
  ],
  selector: 'app-ex02-layout',
  styleUrl: './ex02-layout.css',
  templateUrl: './ex02-layout.html',
})
export class Ex02Layout {}