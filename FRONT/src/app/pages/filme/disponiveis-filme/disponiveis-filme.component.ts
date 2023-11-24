import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Filme } from 'src/app/models/filme.model';

@Component({
  selector: 'app-disponiveis-filme',
  templateUrl: './disponiveis-filme.component.html',
  styleUrls: ['./disponiveis-filme.component.css']
})
export class DisponiveisFilmeComponent {
  filmes: Filme[] = []
  
  constructor(private client: HttpClient){}

  ngOnInit(): void{
    this.client.get<Filme[]>
      ("https://localhost:7035/api/filme/listarDisponiveis")
      .subscribe({
        next: (filmes) =>{
          this.filmes = filmes
        },
        error: (erro) =>{
          console.log(erro)
        }
      })
  }
  
  deletar(filmeID: number){
    this.client.delete<Filme[]>
      (`https://localhost:7035/api/filme/deletar/${filmeID}`)
      .subscribe({
        next: (filmes) =>{
          this.filmes = filmes;         
          console.log("Filme deletado com sucesso") 
        },
        error: (erro) => {
          console.log(erro);
        }
      })
  }
}
