import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private informacionService: InformacionService) {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      /* categoria: new FormControl() */


    })

  }

  ngOnInit(): void {
  }

  async onSUbmit() {
    const NuevoArr = await this.informacionService.addNewwPost(this.formulario.value)
    console.log(NuevoArr);
    this.formulario.reset();
  }

}
