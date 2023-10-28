import { Component, OnInit} from '@angular/core';
import { ProdutoGetService } from '../../services/produto-get.service'
import { Produto } from 'src/app/interfaces/produto';
import { Subscription } from 'rxjs';
import { ProdutoDeleteService } from 'src/app/services/produto-delete.service';
import { ProdutoPutService } from 'src/app/services/produto-put.service';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  produto: Produto = { id:0, nome: '' , codigoBarras: '',preco: 0};
  produtos: Produto[] = [];
  error: Error[] = [];
  private produtosSubscription: Subscription | undefined;
  
  constructor(private produtoGetService: ProdutoGetService, private produtoDeleteService: ProdutoDeleteService, private produtoPutService: ProdutoPutService) { }

  
  excluir(id: number) {
    this.produtoDeleteService.deleteProduto(id).subscribe(
      (response) => {
        if (response.status === 204) {
          console.log('Produto excluído com sucesso.');
          this.atualizar();
        } else {
          console.log('Erro ao excluir o produto. Código de status:', response.status);
        }
      },
    );
  }
  getProduto(produto: Produto){
    this.produto = produto;
  }

  submit(){
    this.produtosSubscription = this.produtoPutService.putProduto(this.produto).subscribe(
      (produtoAtualizado) => {
    console.log('Produto atualizado com sucesso:', produtoAtualizado);
    this.atualizar();
  },
  (error) => {
    this.error.push(error);
    console.error('Erro ao atualizar produto:', error);
  }
);
  }

atualizar(){
  this.produtosSubscription = this.produtoGetService.getProdutos().subscribe(
    (produtos) => {
      this.produtos = produtos;
    },
    (error) => {
      this.error.push(error);
      console.log(error);
    }
  );
}
  

  ngOnInit(): void {
    this.atualizar();
}

ngOnDestroy(): void {
  if (this.produtosSubscription) {
    this.produtosSubscription.unsubscribe();
  }
}
}
