import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstoqueDeleteService {

  constructor(private http: HttpClient) { }

  reduzirEstoque(estoqueId: string, quantidade: number): Observable<Object> {
    const apiUrl = `${'http://localhost:8080/api/estoque'}/${estoqueId}/{quantidade}?quantidade=${quantidade}`;
    console.log(estoqueId + "," + quantidade);
    console.log(apiUrl);
    return this.http.delete(apiUrl, {observe: 'response'}).pipe(
      catchError(error => {
        console.error('Erro na solicitação de redução de estoque:', error);
        throw error;
      })
    );
  }

}