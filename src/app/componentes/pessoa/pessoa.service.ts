import { Injectable } from '@angular/core';
import {PessoaModel} from "./pessoa.model";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient, private message: MatSnackBar) { }

  getPessoas() {
    return this.http.get<PessoaModel[]>('http://localhost:8080/api/v1/pessoas');
  }

  deletePessoa(pessoa: PessoaModel) {
    return this.http.delete(`http://localhost:8080/api/v1/pessoas/${pessoa.id}`);
  }

  salvarPessoa(pessoa?: PessoaModel) {
    this.message.open("teste", 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
    // return this.http.post(`http://localhost:8080/api/v1/pessoas`, pessoa);
  }

  alterarPessoa(pessoa: PessoaModel) {
    return this.http.put(`http://localhost:8080/api/v1/pessoas/${pessoa.id}`, pessoa);
  }

}
