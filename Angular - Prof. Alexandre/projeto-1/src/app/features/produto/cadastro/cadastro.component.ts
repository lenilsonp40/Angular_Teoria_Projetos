import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{

  id!: string;
  produto!: Produto
  rota: string = '';
  isNovoProduto: boolean = false;
  tituloPagina: string = '';

  nome: string = '';
  preco: number = 0;
  estoque: number = 0;
  descricao: string = '';


  constructor (private produtoService: ProdutoService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

    this.rota = this.activatedRoute.snapshot.url[0].path;

    if(this.rota === 'editar-produto'){

      this.id = this.activatedRoute.snapshot.url[1].path;
      this.produtoService.getProdutoPeloId(this.id).subscribe((produto: Produto) => {
      this.produto = produto;
      this.nome = this.produto.nome;
      this.preco = this.produto.preco;
      this.estoque = this.produto.estoque;
      this.descricao = this.produto.descricao;
      this.tituloPagina = `Editar Produto ${this.nome}`;


    })
    }else {
      this.isNovoProduto = true;
      this.tituloPagina = 'Novo Produto';

    }
  }

  salvarProduto(){
    const produtoParaSalvar: Produto = {
      id: parseInt(this.id),
      nome: this.nome,
      preco: this.preco,
      descricao: this.descricao,
      estoque: this.estoque
    }
    console.log(produtoParaSalvar);

    if(this.isNovoProduto){
      this.criarProduto(produtoParaSalvar);
    }else{
    produtoParaSalvar.imagemUrl = this.produto.imagemUrl;
      this.atualizarProduto(produtoParaSalvar);
    }
  }

  atualizarProduto(produtoParaSalvar: Produto) {
    this.produtoService.atualizarProduto(produtoParaSalvar).subscribe(response => {
      this.router.navigate(['produto','listagem']);
    })

  }

  criarProduto(produtoParaSalvar: Produto) {
    this.produtoService.criarProduto(produtoParaSalvar).subscribe(response => {
      this.router.navigate(['produto','listagem']);
    })

  }

}
