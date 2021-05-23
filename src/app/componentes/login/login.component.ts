import { Output, EventEmitter,Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {Login} from "./login";
import {AuthenticationService} from "./authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  form!: FormGroup;
  login: Login;

  constructor(private router: Router, private formBuilder: FormBuilder, private authentication: AuthenticationService) {
    this.login = new Login();
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.login = this.form.value;
      this.authentication.registerSuccessfulLogin("batata", "teste")
      this.router.navigate(['/home']);
    }
  }

  @Output() submitEM = new EventEmitter();

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      password: [null, [Validators.required]],
      username: [null, Validators.required]
    })
  }

}
