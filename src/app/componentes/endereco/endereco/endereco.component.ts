import {Component, Input, OnInit} from '@angular/core';
import {EnderecoModel} from "./endereco.model";

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input()
  public _enderecomodel:EnderecoModel = {
    rua : ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
