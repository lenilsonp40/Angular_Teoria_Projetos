export interface Produto {
  nome: string;
  descricao: string;
  imagemUrl: string;
  preco: number;
  estoque: number;
}

export interface Produtos extends Array<Produto>{}
