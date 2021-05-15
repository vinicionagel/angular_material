import { Input, Output, EventEmitter,Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(private route: ActivatedRoute,private router: Router) {
    this.error = "";
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.controls.username.value !== "" || this.form.controls.password.value !== "") {
      this.submitEM.emit(this.form.value);
      this.error = "";
      this.router.navigate(['/home']);
    } else {
      this.error = "Username or password invalid";
    }
  }

  @Output() submitEM = new EventEmitter();

  @Input() error: string | null;

}
