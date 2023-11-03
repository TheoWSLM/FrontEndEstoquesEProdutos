import { Injectable } from '@angular/core';
import { ProdutoGetService } from './produto-get.service';
import { ProdutoDeleteService } from './produto-delete.service';
import { ProdutoPutService } from './produto-put.service';
import { Produto } from '../interfaces/produto';
import { ProdutoPostService } from './produto-post.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor(
    private produtoGetService: ProdutoGetService,
    private produtoDeleteService: ProdutoDeleteService,
    private produtoPutService: ProdutoPutService,
    private produtoPostService: ProdutoPostService
  ) {}

  getProdutos() {
    return this.produtoGetService.getProdutos();
  }

  deleteProduto(id: number) {
    return this.produtoDeleteService.deleteProduto(id);
  }

  updateProduto(produto: Produto) {
    return this.produtoPutService.putProduto(produto);
  }

  postProduto(produto: Produto) {
    return this.produtoPostService.postProduto(produto);
  }
}
