import { Component, OnInit } from '@angular/core';
import {PessoaCreateComponent} from "../../pessoa/pessoa-create/pessoa-create.component";

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  constructor(public pessoaComponente:PessoaCreateComponent) { }

  ngOnInit(): void {
  }

}
