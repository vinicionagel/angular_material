import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {EnderecoModel} from "./endereco.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ExcluirDialog} from "../../template/excluir-dialog/excluir-dialog";
import {MatDialog} from "@angular/material/dialog";
import {ExcluirDialogComponent} from "../../template/excluir-dialog/excluir-dialog.component";
import {Estado} from "./estado";

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit, ExcluirDialog {

  endereco:EnderecoModel = { rua: '', estado: {nome : "", sigla : ""}};
  enderecoRemocao:EnderecoModel = { rua: '', estado: {nome : "", sigla : ""}};

  estados: Estado[] = [
    {id: 1, nome: "Santa Catarina", sigla: "Sc"},
    {id: 2, nome: "São Paulo", sigla: "Sp"}
  ];

  displayedColumns: string[] = ['rua','estado','acao'];

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
    console.log(this.endereco)
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
    this.endereco = { rua: '', estado: {nome : "", sigla : ""}};
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
    this.enderecoRemocao = { rua: '', estado: {nome : "", sigla : ""}};
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

  buscarCidades() {
    let estado = this.endereco.estado;
    if (estado) {
      console.log(estado.nome);
    }

  }
}
