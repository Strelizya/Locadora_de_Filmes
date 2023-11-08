import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Filme } from 'src/app/models/filme.model';

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styleUrls: ['./listar-filme.component.css']
})
export class ListarFilmeComponent {

  filmes: Filme[] = [];

  constructor(private client: HttpClient){
  }

  //"ngOnInit" é execultado na abertura do componente
  ngOnInit(): void{
    this.client.get<Filme[]>
      ("https://localhost:7035/api/filme/listar")
      .subscribe({
        next: (filmes) => {
          this.filmes = filmes;
        },
        error: (erro) =>{
          console.log(erro);
        }
      });
  }

}
