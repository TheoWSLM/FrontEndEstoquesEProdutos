import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './page/pagina-inicial/pagina-inicial.component';
import { PaginaAjudaComponent } from './page/pagina-ajuda/pagina-ajuda.component';
import { PaginaProdutosComponent } from './page/pagina-produtos/pagina-produtos.component';
import { CadastrarProdutoComponent } from './page/cadastrar-produto/cadastrar-produto.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
{ path: 'inicio', component: PaginaInicialComponent}, 
{ path: 'ajuda', component: PaginaAjudaComponent},
{ path: 'produtos', component: PaginaProdutosComponent},
{ path: 'registrar/produtos', component: CadastrarProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
