import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  imports: [],
  selector: 'app-ex04-pessoa',
  styleUrl: './ex04-pessoa.css',
  templateUrl: './ex04-pessoa.html',
})
export class Ex04Pessoa {
  // Atributos do tipo Pessoa com valores de exemplo
  pessoa1: Pessoa = {
    nome: 'Isabelly',
    sexo: 'Feminino',
    dataNascimento: '09/03/2009',
    estadoCivil: 'Casada',
  };

  pessoa2: Pessoa = {
    nome: 'Maximiliano',
    sexo: 'Masculino',
    dataNascimento: '22/07/2032',
    estadoCivil: 'Solteiro',
  };
}