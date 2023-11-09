import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {

  nome: string = "";
  idade: string = "";

  constructor(private client: HttpClient,
    private router: Router){
    }

    cadastrar(): void{
      let usuario: Usuario = {
        nome: this.nome,
        idade: Number.parseInt(this.idade)
      }

      this.client.post<Usuario>
        ("https://localhost:7035/api/usuario/cadastrar", usuario)
        .subscribe({
          next: (usuario) =>{
            this.router.navigate(['pages/usuario/listar'])
          },
          error: (erro) =>{
            console.log(erro)
          }
        })
    }

}
