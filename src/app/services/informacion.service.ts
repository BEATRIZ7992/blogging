import { Injectable } from '@angular/core';

import { POST } from '../db/blog.db'

export interface Post {
  id?: number;
  titulo?: string;
  texto?: string;
  autor?: string;
  imagen?: string;
  fecha?: Date;
  categoria?: string;
}

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  arraPost: Post[];


  constructor() {

    if (localStorage.getItem('arr_post')) {
      const strArr = localStorage.getItem('arr_post');
      this.arraPost = JSON.parse(strArr);
    } else {
      this.arraPost = POST

    }



  }



  addNewwPost(nuevoPost: Post) {
    return new Promise((resolve, reject) => {
      this.arraPost.push(nuevoPost);
      resolve(this.arraPost);
      const arrTostring = JSON.stringify(this.arraPost)
      localStorage.setItem('arr_post', arrTostring)

    })


  }


  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arraPost);


    })
  }



  getPostByCategory(pCategoria: string): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      const arraFiltrado = [];

      for (let pos of this.arraPost) {
        if (pos.categoria === pCategoria) {
          arraFiltrado.push(pos)
        }

      }
      resolve(arraFiltrado)
      console.log(arraFiltrado)
    })
  }

  getCategory(): string[] {
    const nuevoArr = this.arraPost.map(arrCategory => arrCategory.categoria);
    return [...new Set(nuevoArr)]
  }
  /*  getPostByCategory(pCategoria: Post) {
     return new Promise((resolve, reject) => {
       this.arraPost.filter(pCategoria);
       resolve(this.arraPost)
 
 
 
     })
   } */

}

