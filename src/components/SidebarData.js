import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import swal from 'sweetalert';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

/* const Email = localStorage.getItem('@Email');

function logout(e){

  firebase
    .auth()
    .signOut()
    .then(()=>{
      localStorage.setItem('@Email', '') 
    })
    .then(()=>{
      swal("Sucesso!")
      .then(()=>{
        setTimeout(()=>{
          window.location.replace('/login')
        },1000)
      })
    })
    .catch((error)=>{
      swal(error.message)
    })

    e.preventDefault();
  
} */

var firebaseConfig = {
  apiKey: "AIzaSyBjE_PJfjPOQj5Z62oYHEzjEXMy8FetW-Q",
    authDomain: "banco-de-dados-queijos.firebaseapp.com",
    projectId: "banco-de-dados-queijos",
    storageBucket: "banco-de-dados-queijos.appspot.com",
    messagingSenderId: "700330184648",
    appId: "1:700330184648:web:5888ea46e92bc029f7fafd",
    measurementId: "G-Y6DHRX9M37"
};
function logout(){

  firebase.auth().signOut().then(function() {
    swal('Deslogado com sucesso!');
  }).catch(function(error) {
    swal(error);
  });

}


if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);    
  }
 


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Fazer Login',
    path: '/login',
    icon: <BsIcons.BsArrowBarRight />,
    cName: 'nav-text'
  },
  {
    title: 'Produtos',
    path: '/',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'História da Associação',
    path: '/associacao',
    icon: <BsIcons.BsFillAwardFill />,
    cName: 'nav-text'
  },
  {
    title: 'Rota do Queijo',
    path: '/rotaqueijo',
    icon: <AiIcons.AiFillCar />,
    cName: 'nav-text'
  },
  {
    title: 'Lista de Desejos',
    path: '/desejos',
    icon: <BsIcons.BsHeartFill />,
    cName: 'nav-text'
  },
  {
    title: 'Adicionar Produto',
    path: '/create',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Acessar Perfil',
    path: '/perfil',
    icon: <BsIcons.BsFillPersonFill />,
    cName: 'nav-text'
  },
  {
    title: 'Sair',
    path: '',
    icon: <BsIcons.BsArrowBarLeft onClick={logout}/>,
    cName: 'nav-text'
  },
];