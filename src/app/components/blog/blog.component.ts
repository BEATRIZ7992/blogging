import { Component, OnInit } from '@angular/core';
import { InformacionService, Post } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  ponerPost: Post[];
  listaCategory: string[];



  constructor(private informacionService: InformacionService) {

  }

  async ngOnInit() {

    this.ponerPost = await this.informacionService.getAllPost()

    this.listaCategory = await this.informacionService.getCategory()

  }

  async onChange($event) {
    try {
      if ($event.target.value === 'todos') {
        this.ponerPost = await this.informacionService.getAllPost()
      } else {
        this.ponerPost = await this.informacionService.getPostByCategory($event.target.value)
      }
    } catch (error) {
      console.log(error);

    }

  }

}
