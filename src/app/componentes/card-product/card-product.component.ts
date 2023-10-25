import { Component, OnInit} from '@angular/core';
import { ProdutoGetService } from '../../services/produto-get.service'


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  produtos: any[] = [];
  constructor(private produtoGetService: ProdutoGetService) {}
  ngOnInit() {
    this.produtos = this.produtoGetService.listaDeProdutos();
  }
 
}

