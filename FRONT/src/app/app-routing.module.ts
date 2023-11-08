import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFilmeComponent } from './pages/filme/listar-filme/listar-filme.component';
import { CadastrarFilmeComponent } from './pages/filme/cadastrar-filme/cadastrar-filme.component';

//Definindo as rotas da aplicação
const routes: Routes = [
  {
    //"path" define a rota
    path: "",
    //"componet" define qual component vai ser aberto naquela rota
    component: CadastrarFilmeComponent
  },
  {
    path: "pages/filme/listar",
    component: ListarFilmeComponent
  },
  {
    path: "pages/filme/cadastrar",
    component: CadastrarFilmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
