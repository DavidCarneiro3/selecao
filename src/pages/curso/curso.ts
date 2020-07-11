import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-curso',
  templateUrl: 'curso.html',
})
export class CursoPage {
 curso: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.curso = this.navParams.get('param');
    console.log(this.curso)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoPage');
  }

}
