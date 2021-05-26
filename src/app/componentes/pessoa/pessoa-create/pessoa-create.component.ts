import {Component, OnInit} from '@angular/core';
import {PessoaService} from "../pessoa.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PessoaModel} from "../pessoa.model";

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  pessoa: PessoaModel = {
    endereco: { rua : ''},
    dataNascimento: '', email: '', nacionalidade: '', naturalidade: '', nome: '', sexo: '', cpf: ''
  }

  constructor(private pessoaService: PessoaService,
              private router: Router, private message: MatSnackBar) {

  }

  ngOnInit(): void {
  }

  create():void {
    this.pessoaService.create(this.pessoa).subscribe(() => {
      this.router.navigate(['pessoa']);
      this.message.open("teste", 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
    });
  }

  cancelar():void {
    this.router.navigate(['pessoa']);
  }

}
