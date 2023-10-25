import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './page/pagina-inicial/pagina-inicial.component';
import { PerguntasFrequentesComponent } from './componentes/perguntas-frequentes/perguntas-frequentes.component';
import { PaginaProdutosComponent } from './page/pagina-produtos/pagina-produtos.component';
import { PaginaEstoquesComponent } from './page/pagina-estoques/pagina-estoques.component';


const routes: Routes = [{ path: 'inicio', component: PaginaInicialComponent}, 
{ path: 'ajuda', component: PerguntasFrequentesComponent},
{ path: 'produtos', component: PaginaProdutosComponent},
{ path: 'estoques', component: PaginaEstoquesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
