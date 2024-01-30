import { Component, Input, SimpleChanges} from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto-service.service';
import { AvisoService } from 'src/app/services/aviso.service';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  produto: Produto = { id: '', nome: '', codigoBarras: '', preco: 0 };
  @Input() produtos: Produto[] = [];
  @Input() modoExibir: boolean = true;
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

  constructor(private produtoService: ProdutoService, private avisoService: AvisoService) {
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

  excluir(id: string) {
    this.avisoService.confirmarExcluir(
      'Você tem certeza que deseja remover esse produto?',
      'Essa ação é definitiva'
    ).then((result) => {
      if (result.isConfirmed) {
        this.produtoService.deleteProduto(id).subscribe(
          (response) => {
            if (response.status === 204) {
              this.avisoService.sucesso('Produto excluído com sucesso.', response.statusText);
              this.atualizar();
            } else {
              this.avisoService.erro('Ocorreu um erro ao cadastrar!', response.statusText);
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
        this.avisoService.sucesso("Produto atualizado com sucesso!", produtoAtualizado.nome);
        this.atualizar();
      },
      (error) => {
        this.avisoService.erro('Erro ao atualizar o produto', 'Verifique sua conexão com a internet e tente novamente');    
      }
    );
  }

  atualizar() {
    this.produtosSubscription = this.produtoService.getProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        this.avisoService.erro('Erro ao atualizar o produto', 'Verifique sua conexão com a internet e tente novamente');
      }
    );
  }
}