import React, { useState, useEffect, Component } from 'react';
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




const ProdutosSearch = () => {

  const [produtos, setProdutos] = useState([]);
  const [search, setSearch] = useState('');
 
  const data=[];
  
  const getData = async()=>{
    
    await firebase.database().ref(`/produtos/`).once('value').then((snapshot)=>{
      snapshot.forEach((item)=> {
        
        data.push(item.val());
        console.log("id", data);
        
      })
    });
   
    setProdutos(data);

   /*  temp.map( item => {
      
      let id = item.id;
      console.log("ESSE È O ID2:", id);
    
      localStorage.setItem("@idprod", id);
    }) */


  }



  useEffect(() => {
      getData();

      const params = {}
      if (search) {
        params.title_like = search;
      }
      
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
  
</p>
      {/* EXIBINDO PRODUTOS */}
      <ProdutosList
        produtos={produtos}
        
      />
    </div>

  )
};

export default ProdutosSearch;