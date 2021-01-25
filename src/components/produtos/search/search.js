import React, { useState, useEffect } from 'react';
import ProdutosList from 'components/produtos/list/list';
import UIButton from 'components/UI/Button/Button';
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import swal from 'sweetalert';

import { Link } from 'react-router-dom';
import './search.css'


/* const baseParams = {
  _embed: 'comments',
  _order: 'desc',
  _sort: 'id',
  _limit: 5,
}; */

const ProdutosSearch = () => {

  const [produtos, setProdutos] = useState([]);
  const [search, setSearch] = useState('');
  /* const [load, loadInfo] = useApi({
    debounceDelay: 300,
    url: '/produtos',
    method: 'get',
  }) */
  const temp=[]
  
  const getData = async()=>{
        
    /* await firebase.database().ref('/produtos').once('value', (snap)=> {
      snap.forEach((item)=> {
        temp.push(item.val())
      })
    }); */
  
    await firebase.database().ref(`/produtos`).once('value').then((snapshot)=>{
      snapshot.forEach((item)=> {
        temp.push(item.val());
      })
    });
    console.log("produtos:", temp);
    setProdutos(temp);
    
  }



  useEffect(() => {

    
    

    const params = {};
    if (search) {
      params.title_like = search;
    }
    /* axios.get('http://localhost:4000/produtos?_embed=comments&_order=desc&_sort=id', { params })
      .then((response) => {
        setProdutos(response.data);
      }); */
      
      getData();

     

      
  }, []);




  return (
    

    <div className="produtos-search">
      
      <header className="produtos-search__header">
      <div className="titles">
        <h1>Produtos Cadastrados</h1>
      </div>
      <div className="bt">
        <UIButton className="btn"
          component={Link} to={"/login"} theme="contained-green">
          Fazer Login
                </UIButton>

        {/* <UIButton className="btn1"
          component={Link} to={"/create"} theme="contained-green">
          Cadastrar um Produto
                </UIButton> */}
                </div>

      </header>
      
      <input
        className="produtos-search__input"
        type="search"
        placeholder="Pesquisar por produto"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
<p>
  {/* {JSON.stringify(produtos)} */}
</p>
      {/* EXIBINDO PRODUTOS */}
      <ProdutosList
        produtos={produtos}
        /* loading={!produtos.length}
        refetch={() => {
          load({
            params: baseParams
          })
        }} */
      />
    </div>

  )
};

export default ProdutosSearch;