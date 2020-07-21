import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  loginForm = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() {
  }

  onSubmit() {
    const user = this.loginForm.get('login').value;
    const password = this.loginForm.get('password').value;
    this.authService.login(user, password).subscribe((res: any) => {
      if (res.data = 'SUCCESS') {
        this.router.navigate(['document']);
      }
    });
  }

}
