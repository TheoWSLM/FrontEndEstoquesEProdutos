import { Injectable } from '@angular/core';
import { Estoque } from '../interfaces/estoque';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstoquePostService {
  
  private apiUrl = 'http://localhost:8080/api/estoque';
  estoque: Estoque[] = [];

  constructor(private http: HttpClient) { }

  postEstoque(novoEstoque: Estoque): Observable<Estoque> {
    return this.http.post<Estoque>(this.apiUrl, novoEstoque);
  }
  
}

