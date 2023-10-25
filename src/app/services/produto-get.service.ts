import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProdutoGetService {
  private apiUrl = 'urlget';
 // constructor(private http: HttpClient) { }

  listaDeProdutos() {
    return [
      {
        id: 1,
        nome: 'Produto 1',
        descricao: 'Descrição do Produto 1',
        preco: 99.99
      },
      {
        id: 2,
        nome: 'Produto 2',
        descricao: 'Descrição do Produto 2',
        preco: 99.99
      },
      {
        id: 3,
        nome: 'Produto 3',
        descricao: 'Descrição do Produto 3',
        preco: 99.99
      },
      {
        id: 4,
        nome: 'Produto 4',
        descricao: 'Descrição do Produto 4',
        preco: 99.99
      },
      {
        id: 1,
        nome: 'Produto 1',
        descricao: 'Descrição do Produto 1',
        preco: 99.99
      },
      {
        id: 2,
        nome: 'Produto 2',
        descricao: 'Descrição do Produto 2',
        preco: 99.99
      },
      {
        id: 3,
        nome: 'Produto 3',
        descricao: 'Descrição do Produto 3',
        preco: 99.99
      },
      {
        id: 4,
        nome: 'Produto 4',
        descricao: 'Descrição do Produto 4',
        preco: 99.99
      },
    ];
  }
}
