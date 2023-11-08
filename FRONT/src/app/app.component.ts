import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="pages/filme/cadastrar"> Cadastrar Filme </a>
    <br>
    <a routerLink="pages/filme/listar"> Listar Filmes </a>
  `,
  styles: []
})
export class AppComponent {
  title = 'FRONT';
}
