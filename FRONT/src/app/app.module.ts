import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarProdutoComponent } from './src/app/pages/produto/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutoComponent } from './pages/produto/listar-produto/listar-produto.component';
import { ListarFilmeComponent } from './pages/filme/listar-filme/listar-filme.component';
import { CadastrarFilmeComponent } from './pages/filme/cadastrar-filme/cadastrar-filme.component';
import { CadastrarUsuarioComponent } from './pages/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './pages/usuario/listar-usuario/listar-usuario.component';
import { ListarGeneroComponent } from './pages/genero/listar-genero/listar-genero.component';
import { CadastrarGeneroComponent } from './pages/genero/cadastrar-genero/cadastrar-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutoComponent,
    ListarProdutoComponent,
    ListarFilmeComponent,
    CadastrarFilmeComponent,
    CadastrarUsuarioComponent,
    ListarUsuarioComponent,
    ListarGeneroComponent,
    CadastrarGeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
