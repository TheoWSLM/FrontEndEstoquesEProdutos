import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estoque } from '../interfaces/estoque';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstoqueGetByIdProdutoService {

  constructor(private http: HttpClient) { }
  getEstoqueByProdutoId(idProduto: string): Observable<Estoque>{
    const apiUrl = `${'http://localhost:8080/api/estoque/buscarProduto'}/${idProduto}`;
    return this.http.get<Estoque>(apiUrl);
  }
}