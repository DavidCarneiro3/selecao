import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs-compat/operator/map';



@Injectable()
export class CursosProvider {
  
  constructor(private db: AngularFireDatabase) {
    
    
  }

  getAll(){
    return this.db.list('cursos').valueChanges();
     /*return this.db.list('cursos').snapshotChanges()
     .map(changes => {
       return changes.map(c => ({ key: c.payload.key, data: c.payload.val() }));
     })*/
   }


  get(key: string){
    return this.db.object('cursos' + key)
    .snapshotChanges()
    .map(c => {
      return { 
        key: c.payload.key,
        data: c.payload.val() 
      }
    })
  }

  save(curso: any) {
    return new Promise((resolve, reject) => {
      if (curso.key) {
        this.db.list('cursos')
          .update(curso.key, { name: curso.name, dt_rel: curso.dt_rel, facil: curso.facil, img: curso.img, c_hr: curso.c_hr })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list('cursos')
          .push({ name: curso.name, dt_rel: curso.dt_rel, facil: curso.facil, img: curso.img, c_hr: curso.c_hr })
          .then(() => resolve());
      }
    })
  }

}
