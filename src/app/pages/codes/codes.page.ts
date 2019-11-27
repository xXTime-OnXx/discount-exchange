import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Code} from '../../types/code.type';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.page.html',
  styleUrls: ['./codes.page.scss'],
})
export class CodesPage implements OnInit {

  private ownCodes: Observable<Code[]>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.ownCodes = this.firestore.collection<Code>('codes').valueChanges();
    this.ownCodes.subscribe(data => {

    });
  }

}
