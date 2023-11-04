import { Component } from '@angular/core';
import {Subscription } from 'rxjs';
import { Produto } from 'src/app/interfaces/produto';
import { AvisoService } from 'src/app/services/aviso.service';
import { ProdutoGetService } from 'src/app/services/produto-get.service';

@Component({
  selector: 'app-pagina-produtos',
  templateUrl: './pagina-produtos.component.html',
  styleUrls: ['./pagina-produtos.component.css']
})
export class PaginaProdutosComponent {
  produtos: Produto[] = [];
  modoExibir: boolean = true;
  private produtoInscrito: Subscription | undefined;
  constructor(private produtoGetService: ProdutoGetService,private avisoService: AvisoService) {}

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
        this.avisoService.erro('Erro ao atualizar o produto', 'Verifique sua conexão com a internet e tente novamente');
      }
    );
  }

  alternarLista() {
    this.modoExibir = !this.modoExibir;
  }
}
