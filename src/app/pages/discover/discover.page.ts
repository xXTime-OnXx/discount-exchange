import {Component, OnInit} from '@angular/core';
import {Category} from '../../types/Category.enum';
import {Code} from '../../types/code.type';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-discover',
    templateUrl: './discover.page.html',
    styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

    slideOpts = {
        initialSlide: 0,
        speed: 400,
    };
    categories: Array<string>;
    codesCategory: Array<Observable<Code[]>> = new Array<Observable<Code[]>>();

    constructor(private firestore: AngularFirestore) {
    }

    ngOnInit() {
        this.categories = Object.keys(Category).filter(k => typeof Category[k as any] === 'number');
        console.log(this.categories);
        for (let i = 0; i < this.categories.length; i++) {
            this.codesCategory[i] = this.firestore.collection<Code>('codes', ref => ref.where('category', '==', this.categories[i]))
                .valueChanges();
        }
    }

}

