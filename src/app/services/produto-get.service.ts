import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProdutoGetService {
  private apiUrl = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }
}