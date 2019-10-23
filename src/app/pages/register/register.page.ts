import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string;
  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  async register() {
    await this.authService.createUserWithEmailAndPassword({username: this.username, email: this.email, password: this.password});
  }

}
