import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../_core/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public email = '';
    public password = '';

    constructor(private authService: AuthService) {
    }

    async ngOnInit() {
    }

    async login() {
      console.log('login');
      await this.authService.loginWithEmailAndPassword({username: '', email: this.email, password: this.password});
    }
}
