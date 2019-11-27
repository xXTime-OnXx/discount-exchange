import { Pipe, PipeTransform } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Pipe({
  name: 'doc'
})
export class DocPipe implements PipeTransform {

  constructor(private firestore: AngularFirestore) {}

  transform(value: any): Observable<any> {
    // @ts-ignore
    return this.firestore.doc(value.path).valueChanges();
  }

}
