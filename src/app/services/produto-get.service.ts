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
      },
      {
        id: 2,
        nome: 'Produto 2',
        descricao: 'Descrição do Produto 2',
      },
      {
        id: 3,
        nome: 'Produto 3',
        descricao: 'Descrição do Produto 3',
      },
      {
        id: 4,
        nome: 'Produto 4',
        descricao: 'Descrição do Produto 4',
      },
      {
        id: 1,
        nome: 'Produto 1',
        descricao: 'Descrição do Produto 1',
      },
      {
        id: 2,
        nome: 'Produto 2',
        descricao: 'Descrição do Produto 2',
      },
      {
        id: 3,
        nome: 'Produto 3',
        descricao: 'Descrição do Produto 3',
      },
      {
        id: 4,
        nome: 'Produto 4',
        descricao: 'Descrição do Produto 4',
      },
    ];
  }
}
