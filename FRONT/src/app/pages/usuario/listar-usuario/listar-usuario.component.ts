import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent {
  usuarios: Usuario[] = [];

  constructor(private client: HttpClient){
  }

  ngOnInit(): void{
    this.client.get<Usuario[]>
      ("https://localhost:7035/api/usuario/listar")
      .subscribe({
        next: (usuarios) =>{
          this.usuarios = usuarios
        },
        error: (erro) =>{
          console.log(erro)
        }
      });
  }

}
