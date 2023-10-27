import { Component, OnInit} from '@angular/core';
import { ProdutoGetService } from '../../services/produto-get.service'
import { Produto } from 'src/app/interfaces/produto';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  produtos: Produto[] = [];
  error: Error[] = [];
  private produtosSubscription: Subscription | undefined;
  
  constructor(private produtoService: ProdutoGetService) { }

  ngOnInit(): void {
    this.produtosSubscription = this.produtoService.getProdutos().subscribe(
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
