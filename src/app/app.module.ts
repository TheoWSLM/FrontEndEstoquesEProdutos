import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormsModule } from '@angular/forms';
import { PaginaInicialComponent } from './page/pagina-inicial/pagina-inicial.component';
import { CarrosselComponent } from './componentes/carrossel/carrossel.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CardProductComponent } from './componentes/card-product/card-product.component';
import { CardStorageComponent } from './componentes/card-storage/card-storage.component';
import { PaginaAjudaComponent } from './page/pagina-ajuda/pagina-ajuda.component';
import { PaginaProdutosComponent } from './page/pagina-produtos/pagina-produtos.component';
import { PaginaEstoquesComponent } from './page/pagina-estoques/pagina-estoques.component';
import { PerguntasFrequentesComponent } from './componentes/perguntas-frequentes/perguntas-frequentes.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { LogarUsuarioComponent } from './componentes/logar-usuario/logar-usuario.component';
import { FormRegistrarProdutoComponent } from './componentes/form-registrar-produto/form-registrar-produto.component';
import { FormAtualizarProdutoComponent } from './componentes/form-atualizar-produto/form-atualizar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaInicialComponent,
    CarrosselComponent,
    FooterComponent,
    CardProductComponent,
    CardStorageComponent,
    PaginaAjudaComponent,
    PaginaProdutosComponent,
    PaginaEstoquesComponent,
    PerguntasFrequentesComponent,
    RegistrarUsuarioComponent,
    LogarUsuarioComponent,
    FormRegistrarProdutoComponent,
    FormAtualizarProdutoComponent
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
