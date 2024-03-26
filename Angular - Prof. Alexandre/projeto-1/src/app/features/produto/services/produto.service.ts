import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getProdutos(): Observable<Produtos>{
    return this.http.get<Produtos>(`${this.baseUrl}produtos`);


  }




}
