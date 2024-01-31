import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstoqueAdicionarService {

  private apiUrl = 'http://localhost:8080/api/estoque';

  constructor(private http: HttpClient) { }

  adicionarEstoque(requestBody: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, requestBody);
  }
}
