import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFilmeComponent } from './pages/filme/listar-filme/listar-filme.component';
import { CadastrarFilmeComponent } from './pages/filme/cadastrar-filme/cadastrar-filme.component';
import { CadastrarGeneroComponent } from './pages/genero/cadastrar-genero/cadastrar-genero.component';
import { ListarGeneroComponent } from './pages/genero/listar-genero/listar-genero.component';
import { ListarUsuarioComponent } from './pages/usuario/listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './pages/usuario/cadastrar-usuario/cadastrar-usuario.component';

//Definindo as rotas da aplicação
const routes: Routes = [
  {
    //"path" define a rota
    path: "",
    //"componet" define qual component vai ser aberto naquela rota
    component: ListarFilmeComponent
  },
  //Rotas do FILME
  {
    path: "pages/filme/listar",
    component: ListarFilmeComponent
  },
  {
    path: "pages/filme/cadastrar",
    component: CadastrarFilmeComponent
  },
  //Rotas do GENERO
  {
    path: "pages/genero/listar",
    component: ListarGeneroComponent
  },
  {
    path: "pages/genero/cadastrar",
    component: CadastrarGeneroComponent
  },
  //Rotas do USUARIO
  {
    path: "pages/usuario/listar",
    component: ListarUsuarioComponent
  },
  {
    path: "pages/usuario/cadastrar",
    component: CadastrarUsuarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
