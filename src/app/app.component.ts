import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  pages: Page[] = [
    { 
      title: 'Cursos', 
      component: HomePage, 
      hidden: false,
      icon: "md-list-box" 
    },
    
    { 
      title: 'Apresentação', 
      component: SobrePage, 
      hidden: false,
      icon: "information-circle" 
    }
  ];

  openPage(pages) {
    this.nav.setRoot(pages.component);
  }
}

interface Page {
title: string, //Nome de exibição no menu
component: any, //A página propriamente dita que será direcionada
hidden: boolean, //controlar a exibição dos menus para cada perfil de usuário
icon: string, // ícone no menu
}
