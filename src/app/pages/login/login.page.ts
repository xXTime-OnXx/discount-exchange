import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../_core/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private email: string;
    private password: string;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    async login() {
      console.log('login');
      await this.authService.loginWithEmailAndPassword({username: '', email: this.email, password: this.password});
    }
}
