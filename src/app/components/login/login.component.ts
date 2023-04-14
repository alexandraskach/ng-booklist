import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  password: string = '';
  email: string = '';
  isLogin: boolean = true;

  constructor(
    private restService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params['pageLogin'] === 'false') {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    });
  }

  login() {
    this.restService.login(this.email, this.password);
  }
  switch() {
    this.isLogin = !this.isLogin;
  }
  register() {
    this.restService.register(this.email, this.password);
  }
}
