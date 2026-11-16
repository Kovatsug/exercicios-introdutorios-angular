import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { Ex01Portfolio } from './paginas/exercicios/ex01-portfolio/ex01-portfolio';
import { Ex02Layout } from './paginas/exercicios/ex02-layout/ex02-layout';
import { Ex03Introducao } from './paginas/exercicios/ex03-introducao/ex03-introducao';
import { Ex04Pessoa } from './paginas/exercicios/ex04-pessoa/ex04-pessoa';
import { Ex05Mercado } from './paginas/exercicios/ex05-mercado/ex05-mercado';
import { Ex06Contador } from './paginas/exercicios/ex06-contador/ex06-contador';
import { Ex07Autenticacao } from './paginas/exercicios/ex07-autenticacao/ex07-autenticacao';
import { Ex08Imagem } from './paginas/exercicios/ex08-imagem/ex08-imagem';
import { Ex09Nomes } from './paginas/exercicios/ex09-nomes/ex09-nomes';
import { NaoEncontrado } from './paginas/nao-encontrado/nao-encontrado';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'ex01', component: Ex01Portfolio },
  { path: 'ex02', component: Ex02Layout },
  { path: 'ex03', component: Ex03Introducao },
  { path: 'ex04', component: Ex04Pessoa },
  { path: 'ex05', component: Ex05Mercado },
  { path: 'ex06', component: Ex06Contador },
  { path: 'ex07', component: Ex07Autenticacao },
  { path: 'ex08', component: Ex08Imagem },
  { path: 'ex09', component: Ex09Nomes },
  { path: '**', component: NaoEncontrado },
];