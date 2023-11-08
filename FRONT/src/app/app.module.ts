import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarFilmeComponent } from './pages/filme/listar-filme/listar-filme.component';
import { CadastrarFilmeComponent } from './pages/filme/cadastrar-filme/cadastrar-filme.component';
import { CadastrarUsuarioComponent } from './pages/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './pages/usuario/listar-usuario/listar-usuario.component';
import { ListarGeneroComponent } from './pages/genero/listar-genero/listar-genero.component';
import { CadastrarGeneroComponent } from './pages/genero/cadastrar-genero/cadastrar-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarFilmeComponent,
    CadastrarFilmeComponent,
    CadastrarUsuarioComponent,
    ListarUsuarioComponent,
    ListarGeneroComponent,
    CadastrarGeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
