import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produto } from 'src/app/interfaces/produto';
import { AvisoService } from 'src/app/services/aviso.service';
import { ProdutoService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-form-registrar-produto',
  templateUrl: './form-registrar-produto.component.html',
  styleUrls: ['./form-registrar-produto.component.css']
})
export class FormRegistrarProdutoComponent {
  private produtoInscrito: Subscription | undefined;
  produto: Produto = { id: 0, nome: '', codigoBarras: '', preco: 0 };
  ativarBotao: boolean = false;
  
  constructor(private produtoService: ProdutoService, private router: Router, private avisoService: AvisoService) {
    this.ativarBotao = this.router.url !== '/registrar/produtos';
  }

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
  
  submit(){
    console.log()
    console.log(this.produtoForm.value)
   const  produto:Produto = this.produtoForm.value as Produto; 
    this.produtoInscrito = this.produtoService.postProduto(produto).subscribe(
        (produtoAdicionado) => {
      this.avisoService.sucesso('Produto cadastrado com sucesso!', 'Confira no gerenciamento de estoque');
    },
    (error) => {
      this.avisoService.erro('Ocorreu um erro ao cadastrar!', error.message);
    }
  );
  }

  ngOnDestroy() {
    if (this.produtoInscrito) {
      this.produtoInscrito.unsubscribe();
    }
  }
}