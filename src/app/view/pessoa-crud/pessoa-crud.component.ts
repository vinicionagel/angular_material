import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pessoa-crud',
  templateUrl: './pessoa-crud.component.html',
  styleUrls: ['./pessoa-crud.component.css']
})
export class PessoaCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPessoaCrate(): void {
    this.router.navigate(['/pessoa/create']);
  }

}
