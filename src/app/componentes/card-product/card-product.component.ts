import { Component, OnInit} from '@angular/core';
import { ProdutoGetService } from '../../services/produto-get.service'
import { Produto } from 'src/app/interfaces/produto';
import { Subscription } from 'rxjs';
import { ProdutoDeleteService } from 'src/app/services/produto-delete.service';
import { ProdutoPutService } from 'src/app/services/produto-put.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpStatusCode } from 'axios';


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

  produtoForm = new FormGroup({
    id: new FormControl(this.produto.id, Validators.required),
    nome: new FormControl(this.produto.nome,[ Validators.required, Validators.maxLength(50)]),
    codigoBarras: new FormControl(this.produto.codigoBarras, [Validators.required, Validators.maxLength(20)]),
    preco: new FormControl(this.produto.preco, [Validators.required, Validators.min(0)])
  });
  
  excluir(id: number) {
    Swal.fire({
      title: 'Você tem certeza que deseja remover esse produto?',
      text: "Essa ação é definitiva",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtoDeleteService.deleteProduto(id).subscribe(
          (response) => {
            if (response.status === 204) {
              console.log('Produto excluído com sucesso.');
              Swal.fire("Produto deletado com sucesso!",
              response.statusText,
              "success");
              this.atualizar();
            } else {
              console.log('Erro ao excluir o produto. Código de status:', response.status);
              Swal.fire("Erro ao deletar o produto!",
              `Status da requisição: ${response.status}`,
              "error");
            }
          },
        );
      }
    })
   
  }

  getProduto(produto: Produto){
    this.produtoForm.patchValue(produto)
  }

  submit(){
    const  produto:Produto = this.produtoForm.value as Produto; 
    this.produtosSubscription = this.produtoPutService.putProduto(produto).subscribe(
      (produtoAtualizado) => {
    console.log('Produto atualizado com sucesso:', produtoAtualizado);
    Swal.fire("Produto atualizado com sucesso!",
          produtoAtualizado.nome,
          "success");
    this.atualizar();
  },
  (error) => {
    Swal.fire("Erro ao atualizar o produto",
    `Status da requisição: ${error.status}` , 
          "error");
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
