// import { Component, Input } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { Produto } from 'src/app/interfaces/produto';
// import { ProdutoPutService } from 'src/app/services/produto-put.service';

// @Component({
//   selector: 'app-form-atualizar-produto',
//   templateUrl: './form-atualizar-produto.component.html',
//   styleUrls: ['./form-atualizar-produto.component.css']
// })
// export class FormAtualizarProdutoComponent {
//   produto: Produto = { id:0, nome: '' , codigoBarras: '',preco: 0};
//   error: Error[] = [];
//   private produtosSubscription: Subscription | undefined;

//   @Input() produtoId: number = 0;
  
//   constructor(private produtoPutService: ProdutoPutService) {
    
//   }

// //   submit(){
// //     this.produto.id = this.produtoId;
    
// //     this.produtosSubscription = this.produtoPutService.putProduto(this.produto).subscribe(
// //       (produtoAtualizado) => {
// //     console.log('Produto atualizado com sucesso:', produtoAtualizado);
// //   },
// //   (error) => {
// //     this.error.push(error);
// //     console.error('Erro ao atualizar produto:', error);
// //   }
// // );
// //   }
// }
