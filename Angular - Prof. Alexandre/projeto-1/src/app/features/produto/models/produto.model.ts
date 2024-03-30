export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  imagemUrl?: string;
  preco: number;
  estoque: number;
}

export interface Produtos extends Array<Produto>{}
