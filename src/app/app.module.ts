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
import { PaginaAjudaComponent } from './page/pagina-ajuda/pagina-ajuda.component';
import { PaginaProdutosComponent } from './page/pagina-produtos/pagina-produtos.component';
import { PerguntasFrequentesComponent } from './componentes/perguntas-frequentes/perguntas-frequentes.component';
import { FormRegistrarProdutoComponent } from './componentes/form-registrar-produto/form-registrar-produto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { HttpClientModule } from '@angular/common/http';
import { CadastrarProdutoComponent } from './page/cadastrar-produto/cadastrar-produto.component';
import { AtualizarProdutoComponent } from './page/atualizar-produto/atualizar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaInicialComponent,
    CarrosselComponent,
    FooterComponent,
    CardProductComponent,
    PaginaAjudaComponent,
    PaginaProdutosComponent,
    PerguntasFrequentesComponent,
    FormRegistrarProdutoComponent,
    CadastrarProdutoComponent,
    AtualizarProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
