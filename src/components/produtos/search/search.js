import React, { useState, useEffect } from 'react';
import ProdutosList from 'components/produtos/list/list';
import UIButton from 'components/UI/Button/Button';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import { Link } from 'react-router-dom';
import './search.css'

const ProdutosSearch = () => {

  const [produtos, setProdutos] = useState([]);
  const [produtosFiltered, setProdutosFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const temp = [];

  const getData = async () => {
    const data = await firebase.database().ref(`/produtos`);

    data.on('value', snapshot => {
      snapshot.forEach((item) => {
        temp.push(item.val());
      })
    })
    setProdutos(temp);
  }

  const handleFilter = (ev) => {
    setSearch(ev.target.value);
    const arrayFilter = produtos.filter((item) => {
      return item.nome.toLowerCase().includes(search.toLowerCase()) || item.queijaria.toLowerCase().includes(search.toLowerCase())
    }
    );
    setProdutosFiltered(arrayFilter);
  }

  useEffect(() => {
    getData();
  }, []);

  return (

    <div className="produtos-search">

      <header className="produtos-search__header">
        <div className="titles">
          <h1>Produtos Cadastrados - {produtos.length}</h1>
        </div>
        <div className="bt">
          <UIButton className="btn"
            component={Link} to={"/login"} theme="contained-green">
            Fazer Login
          </UIButton>

        </div>

      </header>

      <input
        className="produtos-search__input"
        placeholder="Pesquisar por produto"
        onChange={handleFilter}
      />
      <p>
      </p>
      <ProdutosList
        produtos={search === '' ? produtos : produtosFiltered}
      />
    </div>
  )
};

export default ProdutosSearch;