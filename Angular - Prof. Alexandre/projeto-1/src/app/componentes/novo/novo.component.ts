import { Component } from '@angular/core';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.scss']
})
export class NovoComponent {
  title = null; 

  clientes = [
    {
      nome: 'Alexandre',
      sexo: 'm',
      idade: 20,
      salario: '10000'
    },
    {
      nome: 'Roberto',
      sexo: 'm',
      idade: 33,
      salario: '11000'
    },
    {
      nome: 'Maura',
      sexo: 'f',
      idade: 23,
      salario: '12000'
    },
    {
      nome: 'Claudia',
      sexo: 'f',
      idade: 22,
      salario: '13000'
    },

  ]
}
