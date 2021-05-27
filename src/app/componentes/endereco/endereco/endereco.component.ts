import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {EnderecoModel} from "./endereco.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  endereco:EnderecoModel = { rua: ''};

  displayedColumns: string[] = ['rua', 'acao'];

  index: number = -1;

  @Input()
  enderecosmodel:EnderecoModel[] = [];

  constructor(private message: MatSnackBar) { }

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  dataSource = new MatTableDataSource<EnderecoModel>(this.enderecosmodel);

  ngOnInit(): void {

  }

  adicionarEndereco() {
    this.enderecosmodel.push(this.endereco);
    this.dataSource.data.push(this.endereco);
    this.dataSource.paginator = this.paginator;
    this.novoEndereco();
    this.message.open("Adicionado novo endereço", 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  private novoEndereco() {
    this.endereco = {rua: ''};
  }

  setEnderecoParaAlteracao(element:EnderecoModel) {
    this.endereco = element;
    this.index = this.enderecosmodel.indexOf(element, 0);
  }

  removeEndereco(element:EnderecoModel) {
    const index = this.enderecosmodel.indexOf(element, 0);
    if (index > -1) {
      this.enderecosmodel.splice(index, 1);
      this.dataSource.data.splice(index, 1);
      this.dataSource.paginator = this.paginator;
    }
  }

  alterarEndereco() {
    this.novoEndereco();
    this.index = -1;
  }
}
