import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SobrePage } from '../sobre/sobre';
import { Observable } from 'rxjs/Observable';
import { CursosProvider } from './../../providers/cursos/cursos';
import { AdicionarPage } from '../adicionar/adicionar';
import { CursoPage } from './../curso/curso'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html' 
})
export class HomePage {
  cursos: Observable<any>
  itens: Observable<any>
  keys : any[] = [];
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public cursosProvider: CursosProvider) {
    this.cursos = this.cursosProvider.getAll()
    console.log(this.cursos)
   }

  opemCurso(item) {
    this.navCtrl.push(CursoPage, {param: item} );
  }

  

}
