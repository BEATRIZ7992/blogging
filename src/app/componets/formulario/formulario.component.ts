import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      titulo: new FormControl('', [
        Validators.minLength(4),

        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.minLength(4),
        Validators.required
      ]),
      autor: new FormControl('', [

        Validators.required
      ]),
      imagen: new FormControl('', [

        Validators.required
      ]),
      categoria: new FormControl('', [

        Validators.required
      ]),
      fecha: new FormControl('', [
        Validators.required
      ])
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
