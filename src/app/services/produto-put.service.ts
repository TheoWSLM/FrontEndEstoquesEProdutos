import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../interfaces/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoPutService {
  private apiUrl = 'http://localhost:8080/api/produtos';
  produto: Produto[] = [];
  
  constructor(private http: HttpClient) { }

  putProduto(atualizarProduto: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.apiUrl, atualizarProduto);
  }
  
}
