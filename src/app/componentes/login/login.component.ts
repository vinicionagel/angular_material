import { Input, Output, EventEmitter,Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Login} from "./login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  form!: FormGroup;
  login: Login;

  constructor(private route: ActivatedRoute,private router: Router, private formBuilder: FormBuilder) {
    this.login = new Login();
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.login = this.form.value;
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
