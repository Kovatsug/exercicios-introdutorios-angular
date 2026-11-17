import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ex06-contador',
  styleUrl: './ex06-contador.css',
  templateUrl: './ex06-contador.html',
})
export class Ex06Contador {

contador =0;

clicar() {
  if (this.contador==10){
    this.contador=0
  }
  else{
    this.contador+=1;
  }
}

zerar(){
  this.contador=0
}
}
