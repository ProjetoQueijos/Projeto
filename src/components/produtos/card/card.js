import React, { useEffect, useState } from 'react';
import './card.css';
import {Link, useParams} from "react-router-dom";
import {BiTrash} from 'react-icons/bi';
import UIButton from 'components/UI/Button/Button';
import {isLogged} from 'components/utils/auth';
import swal from 'sweetalert';
import ReactStars from "react-rating-stars-component";
import 'components/produtos/list/list.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';




const verproduto = (produtos) => {
  
  localStorage.setItem('@titulo', produtos.nome);
  localStorage.setItem('@preco', produtos.price);
  localStorage.setItem('@descricao', produtos.descricao);
  localStorage.setItem('@src', produtos.src);
  localStorage.setItem('@quantidade', produtos.quantidade);
  localStorage.setItem('@id', produtos.id);
  localStorage.setItem('@queijaria', produtos.queijaria);
}


/* 
const deleting = () =>{
  let id = localStorage.getItem("@idproduto");
  let userRef = firebase.database.ref('Produtos/' + id);
  userRef.remove();
} */


const ratingChanged = (newRating) =>{
  console.log(newRating);
}




const ProdutosCard = ({ produtos}) => {
  

  /* const [setId] = useState([]); */
  
 
  const data=[];
  
  const getData = async()=>{
      
  /*   await firebase.database().ref(`/produtos`).child('id').once('value').then((snapshot)=>{
      snapshot.forEach((item)=> {
        
        data.push(item.val());
        console.log("id", data);
      })
    }); */

    await firebase.database().ref('/produtos').once('value', (snapshot) => {
      snapshot.forEach((item)=> {
        
        data.push(item.val());
        
        
      });
      }
    )

  }



  useEffect(() => {
    getData();
  }, []); 
  
  return(

  <div className="produtos-card" >
    
    <img src={produtos.src} alt={produtos.src} className="produtos-card__image" />
    <div className="produtos-card__info">
      <h1 className="produtos-card__title">{produtos.nome}</h1>
      <span className="produtos-card__price" >R$ {produtos.price}</span>
      <br></br>

     {/*  {isLogged()? <span className='avaliacao'>Avaliação<ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          /></span>
          : null} */}
      <footer className="produtos-card__footer">
        
        <div className="btn-card">
          
        <UIButton
          component={Link}
          to={`/produto/${produtos.id}`}
        onClick={()=>verproduto(produtos)}>
          Ver Produto
        </UIButton>
       
         {isLogged()?<UIButton component={Link} to={`/edit/${produtos.id}`} className="btn-card__edit" >Editar</UIButton> : null }
        {isLogged()?<div className="favorite" > Favoritar </div> : null}
        
        
        </div>
      </footer>
       {isLogged()?<button type="button" className="produtos-card__delete-button" > <BiTrash/> </button> : null}
     </div>
  </div>
  )};

export default ProdutosCard;
