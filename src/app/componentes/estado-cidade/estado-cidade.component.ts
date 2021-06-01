import {Component, Input, OnInit} from '@angular/core';
import {EstadoCidade} from "./estado-cidade";
import {Estado} from "./estado";

@Component({
  selector: 'app-estado-cidade',
  templateUrl: './estado-cidade.component.html',
  styleUrls: ['./estado-cidade.component.css']
})
export class EstadoCidadeComponent implements OnInit {

  @Input()
  estadoCidade:EstadoCidade;

  estados: Estado[] = [
    {id: 1, nome: "Santa Catarina", sigla: "Sc"},
    {id: 2, nome: "São Paulo", sigla: "Sp"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buscarCidades() {
    console.log(this.estadoCidade.estado.id);
  }
}
