import { Component, OnInit } from '@angular/core';
import { InformacionService, Post } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  ponerPost: Post[];
  ponerCategorias: string[];


  constructor(private informacionService: InformacionService) {

  }

  async ngOnInit() {

    this.ponerPost = await this.informacionService.getAllPost()

    /*  this.ponerCategorias = await this.informacionService.getPostByCategory() */

  }


}
