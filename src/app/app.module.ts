import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { FirebaseDatabase } from '@firebase/database-types';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
import { CursosProvider } from '../providers/cursos/cursos';
import { AdicionarPage } from '../pages/adicionar/adicionar';
import { CursoPage } from '../pages/curso/curso';
import { AngularFireDatabase } from 'angularfire2/database';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SobrePage,
    AdicionarPage,
    CursoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp({apiKey: "AIzaSyCkGpbJEmJrsHHwRG8De42_eZ9bQa0Zbug",
    authDomain: "selecao-5c2de.firebaseapp.com",
    databaseURL: "https://selecao-5c2de.firebaseio.com",
    projectId: "selecao-5c2de",
    storageBucket: "selecao-5c2de.appspot.com",
    messagingSenderId: "39554510028",
    appId: "1:39554510028:web:2d8ccd09cec5db72006669",
    measurementId: "G-0F1ZSX6TX2"})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SobrePage,
    AdicionarPage,
    CursoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CursosProvider
  ]
})
export class AppModule {}
