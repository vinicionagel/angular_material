import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {EnderecoModel} from "./endereco.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ExcluirDialog} from "../../template/excluir-dialog/excluir-dialog";
import {MatDialog} from "@angular/material/dialog";
import {ExcluirDialogComponent} from "../../template/excluir-dialog/excluir-dialog.component";

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit, ExcluirDialog {

  endereco:EnderecoModel = { rua: ''};
  enderecoRemocao:EnderecoModel = { rua: ''};

  displayedColumns: string[] = ['rua', 'acao'];

  index: number = -1;

  @Input()
  enderecosmodel:EnderecoModel[] = [];

  constructor(private message: MatSnackBar, public dialog: MatDialog) { }

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
    this.enderecoRemocao = element;
    this.dialog.open(ExcluirDialogComponent, {
      width: '350px',
      data: this
    })
  }

  alterarEndereco() {
    this.novoEndereco();
    this.index = -1;
  }

  cancelarExclusao(): void {
    this.enderecoRemocao = {rua: ""};
  }

  confirmarExclusao(): void {
    const index = this.enderecosmodel.indexOf(this.enderecoRemocao, 0);
    if (index > -1) {
      this.enderecosmodel.splice(index, 1);
      this.dataSource.data.splice(index, 1);
      this.dataSource.paginator = this.paginator;
    }
  }

  textoExclusao(): string {
    return `Deseja excluir o endereço: ${this.enderecoRemocao.rua}`;
  }
}
