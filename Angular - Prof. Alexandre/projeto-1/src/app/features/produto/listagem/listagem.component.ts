import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produtos } from '../models/produto.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit{
  produtos!: Produtos;

  constructor(private produtoService: ProdutoService){

  }


  ngOnInit(): void {
    this.produtoService.getProdutos()
    .subscribe(produtos => {
      this.produtos = produtos;
      console.log(this.produtos)

    });
  }



}
