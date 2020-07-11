import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosProvider } from './../../providers/cursos/cursos';
 

@Component({
  selector: 'page-adicionar-edit',
  templateUrl: 'adicionar.html',
})
export class AdicionarPage {
  title: string;
  form: FormGroup;
  curso: any;
 
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private cursoPvd: CursosProvider,
    private toast: ToastController) {
 

    this.curso = this.navParams.data.curso || { };
    this.createForm();
 
    this.setupPageTitle();
  }
 
  private setupPageTitle() {
    this.title = this.navParams.data.curso ? 'Alterando contato' : 'Novo contato';
  }
 
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.curso.key],
      name: [this.curso.name, Validators.required],
      dt_rel: [this.curso.dt_rel, Validators.required],
      facil: [this.curso.facil, Validators.required],
      c_hr: [this.curso.c_hr, Validators.required],
      img: [this.curso.img, Validators.required],
    });
  }
 
  add() {
    if (this.form.valid) {
      this.cursoPvd.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Curso salvo com sucesso.', duration: 3000 }).present();
          //this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o Curso.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
}