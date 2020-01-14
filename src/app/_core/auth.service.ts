import { Injectable } from '@angular/core';
import {User} from '../types/user.type';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router, private firestore: AngularFirestore) { }

  async loginWithEmailAndPassword(user: User) {
    await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    await this.router.navigate(['/tabs']);
  }

  async createUserWithEmailAndPassword(user: User) {
    await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    let uid = this.afAuth.auth.currentUser.uid;
    await this.firestore.collection('users').doc(uid).set({username: user.username, email: user.email, uid: uid});
    await this.router.navigate(['/login']);
  }
  get authenticated(): boolean {
    return this.afAuth.auth.currentUser !== null;
  }
  async logout() {
    await this.afAuth.auth.signOut();
  }
}
