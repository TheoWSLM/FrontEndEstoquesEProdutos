import { Component } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import {ProdutoPostService} from '../../services/produto-post.service'
import { Subscription } from 'rxjs';
import {CardProductComponent} from '../card-product/card-product.component'
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registrar-produto',
  templateUrl: './form-registrar-produto.component.html',
  styleUrls: ['./form-registrar-produto.component.css']
})
export class FormRegistrarProdutoComponent {
private produtosSubscription: Subscription | undefined;

constructor(private produtoPostService: ProdutoPostService) {}

produtoForm = new FormGroup({
  id: new FormControl(0, Validators.required),
  nome: new FormControl('', Validators.required),
  codigoBarras: new FormControl('', Validators.required),
  preco: new FormControl(0, Validators.required)
});

submit(){
 const  produto:Produto = this.produtoForm.value as Produto; 
  this.produtosSubscription = this.produtoPostService.postProduto(produto).subscribe(
      (produtoAdicionado) => {
    console.log('Produto adicionado com sucesso:', produtoAdicionado);
    Swal.fire("Usuario cadastrado com sucesso!",
    "Produto cadastrado com sucesso!",
    "success");
  },
  (error) => {
    console.error('Erro ao adicionar produto:', error);
    Swal.fire("Ocorreu um erro ao cadastrar!",
    error.message,
    "error");
  }
);
}
}

