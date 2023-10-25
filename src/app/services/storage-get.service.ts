import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageGetService {

  constructor() { }

  listaDeEstoques() {
    return [
      {
        id: 1,
        nome: 'estoque 1',
        descricao: 'Descrição do estoque 1',
      },
      {
        id: 2,
        nome: 'estoque 2',
        descricao: 'Descrição do estoque 2',
      },
      {
        id: 3,
        nome: 'estoque 3',
        descricao: 'Descrição do estoque 3',
      },
      {
        id: 4,
        nome: 'estoque 4',
        descricao: 'Descrição do estoque 4',
      },
      {
        id: 1,
        nome: 'estoque 1',
        descricao: 'Descrição do estoque 1',
      },
      {
        id: 2,
        nome: 'estoque 2',
        descricao: 'Descrição do estoque 2',
      },
      {
        id: 3,
        nome: 'estoque 3',
        descricao: 'Descrição do estoque 3',
      },
      {
        id: 4,
        nome: 'estoque 4',
        descricao: 'Descrição do estoque 4',
      },
    ];
  }
}
