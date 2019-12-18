import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AuthGuard} from './_core/auth.guard';
import {AuthService} from './_core/auth.service';
import {FormsModule} from '@angular/forms';
import { DocPipe } from './pipes/doc.pipe';
import {PipesModule} from './pipes/pipes.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const firebaseConfig = {
    apiKey: 'AIzaSyDaeyCH77x1wU-jMgG4qqgODy4xKwXAnwU',
    authDomain: 'discount-exchange.firebaseapp.com',
    databaseURL: 'https://discount-exchange.firebaseio.com',
    projectId: 'discount-exchange',
    storageBucket: '',
    messagingSenderId: '517408551350',
    appId: '1:517408551350:web:d8a04a56040a3df7f39117'
};

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AuthGuard,
        AuthService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
