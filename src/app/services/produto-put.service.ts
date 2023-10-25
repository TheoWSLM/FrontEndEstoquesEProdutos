import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoPutService {
  private apiUrl = 'urlPut';
  constructor(private http: HttpClient) { }

  createProduto(produtoData: any) {
    return this.http.put(this.apiUrl, produtoData);
  }
}
