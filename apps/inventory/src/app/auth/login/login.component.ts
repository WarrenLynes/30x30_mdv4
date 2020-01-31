import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@mdv4/core-data';
import { Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'mdv4-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private service: AuthService, private router: Router) {
    this.buildForm();
  }

  ngOnInit() {
    this.service.authenticated.subscribe((x) => {
      if(x) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

  submit() {
    this.service.authenticate(this.loginForm.value);
  }

  buildForm() {
    this.loginForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl('')
    });
  }
}
