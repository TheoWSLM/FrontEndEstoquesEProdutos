import { Component, OnInit} from '@angular/core';
import { ProdutoGetService } from '../../services/produto-get.service'
import { Produto } from 'src/app/interfaces/produto';
import { Subscription } from 'rxjs';
import { ProdutoDeleteService } from 'src/app/services/produto-delete.service';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  produtos: Produto[] = [];
  error: Error[] = [];
  private produtosSubscription: Subscription | undefined;
  
  constructor(private produtoGetService: ProdutoGetService, private produtoDeleteService: ProdutoDeleteService) { }

  excluir(id: number) {
    this.produtoDeleteService.deleteProduto(id).subscribe(
      (response) => {
        if (response.status === 204) {
          console.log('Produto excluído com sucesso.');
        } else {
          console.log('Erro ao excluir o produto. Código de status:', response.status);
        }
      },
    );
  }
  

  ngOnInit(): void {
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
ngOnDestroy(): void {
  if (this.produtosSubscription) {
    this.produtosSubscription.unsubscribe();
  }
}
}
