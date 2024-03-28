import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{

  id!: string;
  produto!: Produto


  constructor (private produtoService: ProdutoService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.url[1].path;

    this.produtoService.getProdutoPeloId(this.id).subscribe((produto: Produto) => {
      this.produto = produto;
      console.log(produto)
    })

  }

}
