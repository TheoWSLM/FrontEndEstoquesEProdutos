import { Component } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import {ProdutoPostService} from '../../services/produto-post.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-registrar-produto',
  templateUrl: './form-registrar-produto.component.html',
  styleUrls: ['./form-registrar-produto.component.css']
})
export class FormRegistrarProdutoComponent {
produto: Produto = { id:0, nome: '' , codigoBarras: '',preco: 0};
produtoAdicionado:  Produto = {id:0, nome: '' , codigoBarras: '',preco: 0};
error: Error[] = [];
private produtosSubscription: Subscription | undefined;

constructor(private produtoPostService: ProdutoPostService) {}

submit(){
  this.produtosSubscription = this.produtoPostService.postProduto(this.produto).subscribe(
      (produtoAdicionado) => {
    console.log('Produto adicionado com sucesso:', produtoAdicionado);
  },
  (error) => {
    this.error.push(error);
    console.error('Erro ao adicionar produto:', error);
  }
);
}
}

