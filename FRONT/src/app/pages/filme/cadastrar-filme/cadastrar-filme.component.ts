import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/models/filme.model';
import { Genero } from 'src/app/models/genero.model';

@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: './cadastrar-filme.component.html',
  styleUrls: ['./cadastrar-filme.component.css']
})
export class CadastrarFilmeComponent {

  //crio as variaveis que vão ser enviadas para a API
  nome: string = "";
  classif_ind: string = "";
  ano_lanc: string = "";
  alugado: boolean = false;
  generoID: number = 0;
  generos : Genero[] = [];

  constructor(private client: HttpClient,
    private router: Router){}

  //Requisição que recebe uma lista de "Genero" da "API", e recebe essa lista em memoria no front
  ngOnInit(): void{
    this.client.get<Genero[]>
      ("https://localhost:7035/api/genero/listar")
      .subscribe({
        //caso a requisição funcione, vai execultar esse código
        
        //basicamente, esse trecho está recebendo uma lista de "generos" da "API", e está recebendo para o array "generos" declrado junto aos atributos
        next: (generos) => {
          console.table(generos);
          this.generos = generos;
        },

        //caso a requisição falhe
        error : (erro) => {
          console.log(erro)
        }
      })
  }

  //Função "Cadastrar"
  //Para fazer o cadastrar, eu passo um objeto do tipo "Filme", com os dados necessarios
  cadastrar(): void{
    let filme: Filme ={
      nome: this.nome,
      classif_ind: Number.parseInt(this.classif_ind),
      ano_lanc: Number.parseInt(this.ano_lanc),
      alugado: this.alugado,
      generoID: this.generoID
    }; 

    //Fazendo a requisição de cadastro para a "API"
    this.client.post<Filme>
      //para fazer uma requisição "POST", são necessarias 2 coisas
      //1 - A rota da requisição que está na "API"
      //2 - Passar um objeto para ir junto com a requisição
      ("https://localhost:7035/api/filme/cadastrar", filme)
      .subscribe({
        //Requisição deu certo
        next: (filme) => {
          this.router.navigate(['pages/filme/listar'])
        },
        error: (erro) =>{
          console.log(erro);
        }
      })
  };

}
