import React, {useEffect} from 'react';
import './card.css';
import {Link} from "react-router-dom";
import {BiTrash} from 'react-icons/bi';
import {GrFavorite} from 'react-icons/gr';
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
import { render } from '@testing-library/react';



const verproduto = (produtos) => {
  localStorage.setItem('@titulo', produtos.nome);
  localStorage.setItem('@preco', produtos.price);
  localStorage.setItem('@descricao', produtos.descricao);
  localStorage.setItem('@src', produtos.src);
  localStorage.setItem('@quantidade', produtos.quantidade);

 
}

  const logado = (onClickDelete) => isLogged() 
    ?onClickDelete() 
    :swal("Faça login para executar esta ação.")


const ratingChanged = (newRating) =>{
  console.log(newRating);
}

/* var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', (snapshot) =>{
  const data = snapshot.val();
  updateStarCount(postElement, data);
});
 */






 

const ProdutosCard = ({ produtos, onClickDelete, id}) => (
 
  

  <div className="produtos-card" >
    
    <img src={produtos.src} alt={produtos.src} className="produtos-card__image" />
    <div className="produtos-card__info">
      <h1 className="produtos-card__title" id="titulo">{produtos.nome}</h1>
      <span className="produtos-card__price" >R$ {produtos.price}</span>
      <br></br>

      {isLogged()? <span className='avaliacao'>Avaliação<ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          /></span>
          : null}
      <footer className="produtos-card__footer">
          
      
     
     
        
        <div className="btn-card">
        <UIButton
          component={Link}
          to={`/produto/${id}`}
        onClick={()=>verproduto(produtos)}>
          Ver Produto
        </UIButton>
       
        {isLogged()?<UIButton component={Link} to={`/edit/${id}`} className="btn-card__edit" >Editar</UIButton> : null }
        {isLogged()?<div className="favorite" > Favoritar </div> : null}
        
        
        </div>
      </footer>
      {isLogged()?<button type="button" className="produtos-card__delete-button" onClick={()=>logado(onClickDelete)}> <BiTrash/> </button> : null}
    </div>
  </div>
  );

export default ProdutosCard;
