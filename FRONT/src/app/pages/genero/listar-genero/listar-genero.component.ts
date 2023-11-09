import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';

@Component({
  selector: 'app-listar-genero',
  templateUrl: './listar-genero.component.html',
  styleUrls: ['./listar-genero.component.css']
})
export class ListarGeneroComponent {
  
  //array de "generos"
  generos : Genero[] = []

  constructor(private client: HttpClient){
  }

  ngOnInit(): void{
    this.client.get<Genero[]>
    ("https://localhost:7035/api/genero/listar")
    .subscribe({
      //recebendo os generos em "generos" na função
      next: (generos) =>{
        //Enviando os "generos" recebidos da "API", para "generos" no "FRONT"
        this.generos = generos; 
      },
      error: (erro) =>{
        console.log(erro)
      }
    })
  }

}
