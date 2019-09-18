import { Injectable } from '@angular/core';
import {User} from '../types/user.type';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  async loginWithEmailAndPassword(user: User) {
    await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    await this.router.navigate(['/tabs']);
  }

  async createUserWithEmailAndPassword(user: User) {
    await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
  get authenticated(): boolean {
    return this.afAuth.auth.currentUser !== null;
  }
  async logout() {
    await this.afAuth.auth.signOut();
  }
}
