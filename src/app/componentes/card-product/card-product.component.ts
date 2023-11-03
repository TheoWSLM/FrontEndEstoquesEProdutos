import { Component, Input, SimpleChanges} from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProdutoService } from 'src/app/services/produto-service.service';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  produto: Produto = { id: 0, nome: '', codigoBarras: '', preco: 0 };
  @Input() produtos: Produto[] = [];
  @Input() modoExibir: boolean = true;
  error: Error[] = [];
  private produtosSubscription: Subscription | undefined;
  modoAtual: boolean = false;

  errorMessages = {
    required: 'Este campo é obrigatório.',
    maxLength: 'O valor inserido é maior que o limite de caracteres',
    min: 'O valor deve ser maior que 0.',
    pattern: 'Formato inválido. Use um número válido com até duas casas decimais.'
  };
  
  produtoForm = new FormGroup({
    id: new FormControl(this.produto.id, Validators.required),
    nome: new FormControl(this.produto.nome, [Validators.required, Validators.maxLength(100)]),
    codigoBarras: new FormControl(this.produto.codigoBarras, [Validators.required, Validators.maxLength(20)]),
    preco: new FormControl(this.produto.preco, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+([,.][0-9]{1,2})?$')])
  });

  constructor(private produtoService: ProdutoService) {
   }

   ngOnInit(): void {
    this.atualizar();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['modoExibir']) {
    this.modoAtual = !this.modoAtual;
    }

  }
  ngOnDestroy(): void {
    if (this.produtosSubscription) {
      this.produtosSubscription.unsubscribe();
    }
  }

  excluir(id: number) {
    Swal.fire({
      title: 'Você tem certeza que deseja remover esse produto?',
      text: 'Essa ação é definitiva',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0d6efd',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Sim, deletar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtoService.deleteProduto(id).subscribe(
          (response) => {
            if (response.status === 204) {
              console.log('Produto excluído com sucesso.');
              Swal.fire('Produto deletado com sucesso!', response.statusText, 'success');
              this.atualizar();
            } else {
              console.log('Erro ao excluir o produto. Código de status:', response.status);
              Swal.fire('Erro ao deletar o produto!', `Status da requisição: ${response.status}`, 'error');
            }
          }
        );
      }
    });
  }

  getProduto(produto: Produto) {
    this.produtoForm.patchValue(produto);
  }

  submit() {
    const produto: Produto = this.produtoForm.value as Produto;
    this.produtosSubscription = this.produtoService.updateProduto(produto).subscribe(
      (produtoAtualizado) => {
        console.log('Produto atualizado com sucesso:', produtoAtualizado);
        Swal.fire('Produto atualizado com sucesso!', produtoAtualizado.nome, 'success');
        this.atualizar();
      },
      (error) => {
        Swal.fire('Erro ao atualizar o produto', `Status da requisição: ${error.status}`, 'error');
        console.error('Erro ao atualizar produto:', error);
      }
    );
  }

  atualizar() {
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
}