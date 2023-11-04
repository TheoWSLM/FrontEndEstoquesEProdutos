import { Component } from '@angular/core';
import {Subscription } from 'rxjs';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoGetService } from 'src/app/services/produto-get.service';

@Component({
  selector: 'app-pagina-produtos',
  templateUrl: './pagina-produtos.component.html',
  styleUrls: ['./pagina-produtos.component.css']
})
export class PaginaProdutosComponent {
  produtos: Produto[] = [];
  error: Error[] = [];
  modoExibir: boolean = true;
  private produtoInscrito: Subscription | undefined;
  constructor(private produtoGetService: ProdutoGetService) {}

  ngOnInit(): void {
    this.atualizar();
}

ngOnDestroy(): void {
  if (this.produtoInscrito) {
    this.produtoInscrito.unsubscribe();
  
}
}

atualizar(){
    this.produtoInscrito = this.produtoGetService.getProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        this.error.push(error);
        console.log(error);
      }
    );
  }

  alternarLista() {
    this.modoExibir = !this.modoExibir;
  }
}
