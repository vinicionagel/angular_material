import { Injectable } from '@angular/core';
import {PessoaModel} from "./pessoa.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/api/v1/pessoas/";

  getPessoas() {
    return this.http.get<PessoaModel[]>(this.baseUrl);
  }

  deletePessoa(pessoa: PessoaModel) {
    return this.http.delete(`${this.baseUrl}${pessoa.id}`);
  }

  create(pessoa: PessoaModel) : Observable<PessoaModel> {
    console.log(pessoa);
    return this.http.post<PessoaModel>(this.baseUrl, pessoa);
  }

  alterarPessoa(pessoa: PessoaModel) {
    return this.http.put(this.baseUrl, pessoa);
  }

}
