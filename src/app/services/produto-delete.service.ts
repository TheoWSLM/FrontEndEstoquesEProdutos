import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoDeleteService {

  constructor(private http: HttpClient) { }

  deleteProduto(produtoId: number): Observable<HttpResponse<Object>> {
    const apiUrl = `${'http://localhost:8080/api/produtos'}/${produtoId}`;
    
    return this.http.delete(apiUrl, { observe: 'response' });
  }
  

}
