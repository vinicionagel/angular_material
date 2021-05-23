import { Component, OnInit } from '@angular/core';
import {PessoaService} from "../pessoa.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  constructor(private pessoaService: PessoaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  salvarPessoa():void {
    this.pessoaService.salvarPessoa(undefined);
  }

  cancelar():void {
    this.router.navigate(['pessoa']);
  }
}
