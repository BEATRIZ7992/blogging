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
    this.arraPost = POST
  }

  addNewwPost(nuevoPost: Post) {
    return new Promise((resolve, reject) => {
      this.arraPost.push(nuevoPost);
      resolve(this.arraPost)
    })

  }

  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arraPost)
    })
  }


  getPostByCategory(pCategoria: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = POST.filter((Pos) => {
        return Pos.categoria === pCategoria;
      });
      resolve(arrFiltrado)
    })
  }

}

