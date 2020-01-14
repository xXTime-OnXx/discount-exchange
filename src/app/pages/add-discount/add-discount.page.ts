import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Company} from "../../types/company.type";
import {Code} from "../../types/code.type";
import { v4 as uuid } from 'uuid';
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.page.html',
  styleUrls: ['./add-discount.page.scss'],
})
export class AddDiscountPage implements OnInit {

  company: string;
  code: string;
  category: string;

  public companies: Observable<Company[]>;

  constructor(private router: Router, private firestore: AngularFirestore, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.companies = this.firestore.collection<Company>('companies').valueChanges();
  }

  async back() {
    await this.router.navigate(['/tabs/codes']);
  }

  async add() {
    let id = uuid();
    let code = {
      uid: id,
      company: this.firestore.doc('/companies/' + this.company).ref,
      category: this.category,
      code: this.code,
      createdAt: new Date(),
      user: this.firestore.doc('/users/' + this.afAuth.auth.currentUser.uid).ref,
    };
    await this.firestore.collection('codes').doc(id).set(code);
    await this.router.navigate(['/tabs/codes']);
  }
}
