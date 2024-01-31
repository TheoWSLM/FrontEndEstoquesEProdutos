import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Estoque } from 'src/app/interfaces/estoque';
import { Produto } from 'src/app/interfaces/produto';
import { AvisoService } from 'src/app/services/aviso.service';
import { EstoquePostService } from 'src/app/services/estoque-post.service';

@Component({
  selector: 'app-form-registrar-produto',
  templateUrl: './form-registrar-produto.component.html',
  styleUrls: ['./form-registrar-produto.component.css']
})
export class FormRegistrarProdutoComponent {
  private estoqueInscrito: Subscription | undefined;
  produtoEstoque: Produto = { id: '', nome: '', codigoBarras: '', preco: 0 };
  estoque: Estoque = { id: '', produto: this.produtoEstoque, quantidade: 0}
  ativarBotao: boolean = false;
  
  constructor(private estoquePostService: EstoquePostService, private router: Router, private avisoService: AvisoService) {
    this.ativarBotao = this.router.url !== '/registrar/produtos';
  }

  errorMessages = {
    required: 'Este campo é obrigatório.',
    maxLength: 'O valor inserido é maior que o limite de caracteres',
    min: 'O valor deve ser maior que 0.',
    max: 'O valor deve ser menor que 10000000.',
    pattern: 'Formato inválido. Use um número válido com até duas casas decimais.'
  };
  
  
  estoqueForm = new FormGroup({
    nome: new FormControl(this.estoque.produto.nome, [Validators.required, Validators.maxLength(100)]),
    codigoBarras: new FormControl(this.estoque.produto.codigoBarras, [Validators.required, Validators.maxLength(20)]),
    preco: new FormControl(this.estoque.produto.preco, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+([,.][0-9]{1,2})?$')]),
    quantidade: new FormControl(this.estoque.quantidade, [Validators.required, Validators.min(1), Validators.max(10000000)])
  });
  
  submit(){

    const produto: Produto = {
      id: '',
      nome: this.estoqueForm.get('nome')?.value ?? '',  
      codigoBarras: this.estoqueForm.get('codigoBarras')?.value ?? '',
      preco: this.estoqueForm.get('preco')?.value || 0, 
    };
  
    const estoque: Estoque = {
      id: '',
      produto: produto,
      quantidade: this.estoqueForm.get('quantidade')?.value || 0,  // Certifique-se de lidar com o caso em que o campo está vazio
    };

    this.estoqueInscrito = this.estoquePostService.postEstoque(estoque).subscribe(
        (estoqueAdicionado) => {
      this.avisoService.sucesso('Estoque cadastrado com sucesso!', 'Confira o produto no gerenciamento');
    },
    (error) => {
      this.avisoService.erro('Ocorreu um erro ao cadastrar!', 'Verifique sua conexão com a internet e tente novamente');
    }
  );
  }

  ngOnDestroy() {
    if (this.estoqueInscrito) {
      this.estoqueInscrito.unsubscribe();
    }
  }
}