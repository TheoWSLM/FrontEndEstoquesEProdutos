import { Injectable } from '@angular/core';
import { ProdutoGetService } from './produto-get.service';
import { ProdutoDeleteService } from './produto-delete.service';
import { ProdutoPutService } from './produto-put.service';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor(
    private produtoGetService: ProdutoGetService,
    private produtoDeleteService: ProdutoDeleteService,
    private produtoPutService: ProdutoPutService,
  ) {}

  getProdutos() {
    return this.produtoGetService.getProdutos();
  }

  deleteProduto(id: string) {
    return this.produtoDeleteService.deleteProduto(id);
  }

  updateProduto(produto: Produto) {
    return this.produtoPutService.putProduto(produto);
  }

}
