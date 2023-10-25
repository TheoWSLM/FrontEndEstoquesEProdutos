import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProdutoPostService {
  private apiUrl = 'urlPost';
  constructor(private http: HttpClient) { }

  createProduto(produtoData: any) {
    return this.http.post(this.apiUrl, produtoData);
  }
}


