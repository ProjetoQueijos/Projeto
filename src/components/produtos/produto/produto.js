import React from 'react';
import './produto.css';
import UIButton from 'components/UI/Button/Button';
import {Link} from "react-router-dom";




const Produto = () => {
  const titulo = localStorage.getItem('@titulo');
  const preco = localStorage.getItem('@preco');
  const descricao = localStorage.getItem('@descricao');
  const quantidade = localStorage.getItem('@quantidade');
  const src = localStorage.getItem('@src');
  const id = localStorage.getItem('@id');
  const queijaria = localStorage.getItem('@queijaria');
    return (
        <div className="container">
            <h1 className="titulo">{`Produto: ${titulo}`}</h1>
            <img src={`${src}`} className="imgproduto"/>
            <p><h2 className="preco">{`Preço: R$${preco} reais`}</h2></p>
            <p><h2 className="descricao">{`Descrição: ${descricao} `}</h2></p>
            <p><h2 className="queijaria">{`Queijaria: ${queijaria} `}</h2></p>

        {/* <p><h2>Id: {`${id}`}</h2></p>
         */}    <p className="quantidade">
            {quantidade < 1 ? 'Sem estoque no momento' : `Quantidade disponível: ${quantidade}`}
            </p>
            <div className="botao">
            <UIButton  component={Link} to={'/'}> Voltar </UIButton>
            </div>

            </div>

        
    )
};

export default Produto;