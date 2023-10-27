import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../interfaces/produto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProdutoPostService {
  private apiUrl = 'http://localhost:8080/api/produtos';
  produto: Produto[] = [];
  
  constructor(private http: HttpClient) { }

  postProduto(novoProduto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, novoProduto);
  }
  
}


