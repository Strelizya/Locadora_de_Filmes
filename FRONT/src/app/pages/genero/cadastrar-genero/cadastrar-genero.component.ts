import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/models/genero.model';

@Component({
  selector: 'app-cadastrar-genero',
  templateUrl: './cadastrar-genero.component.html',
  styleUrls: ['./cadastrar-genero.component.css']
})
export class CadastrarGeneroComponent {

  //variaveis que vão receber os dados do FRONT
  generoNome: string = "";

  //"client" variavel para poder fazer as requisições para a "API"
  //"router" para acessar as rotas
  constructor(private client: HttpClient,
    private router: Router){
    }

  //Função "cadastrar"
  cadastrar(): void{
    let genero: Genero ={
      generoNome: this.generoNome
    }
  
  //Fazendo requisição para a "API"
  this.client.post<Genero>
    ("https://localhost:7035/api/genero/cadastrar", genero)
    .subscribe({
      next: (filme) =>{
        this.router.navigate(['pages/genero/listar'])
      },
      error: (erro) =>{
        console.log(erro);
      }
    })
  }

}
