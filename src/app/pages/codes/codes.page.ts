import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Code} from '../../types/code.type';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-codes',
  templateUrl: './codes.page.html',
  styleUrls: ['./codes.page.scss'],
})
export class CodesPage implements OnInit {

  public ownCodes: Observable<Code[]>;

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.ownCodes = this.firestore.collection<Code>('codes', ref => ref.where('user.email', '==', this.afAuth.auth.currentUser.email)).valueChanges();
  }

  async addDiscount() {
    await this.router.navigate(['add-discount']);
  }

  async delete(id: string) {
    await this.firestore.doc('codes/' + id).delete();
  }
}
