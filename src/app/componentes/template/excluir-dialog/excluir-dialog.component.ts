import {Component, Inject, OnInit} from '@angular/core';
import {ExcluirDialog} from "./excluir-dialog";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-excluir-dialog',
  templateUrl: './excluir-dialog.component.html',
  styleUrls: ['./excluir-dialog.component.css']
})
export class ExcluirDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExcluirDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ExcluirDialog) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.data.cancelarExclusao();
    this.dialogRef.close();
  }

  confirmarExclusao() {
    this.data.confirmarExclusao();
    this.dialogRef.close();
  }
}
