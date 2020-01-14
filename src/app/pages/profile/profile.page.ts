import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    username: string = '';

    constructor(private afAuth: AngularFireAuth) {
    }

    ngOnInit() {
        this.username = this.afAuth.auth.currentUser.email
    }

}
