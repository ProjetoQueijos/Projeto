import React, { useState, useCallback } from 'react';
import swal from 'sweetalert';
import { useHistory, withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import UIButton from 'components/UI/Button/Button';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';



/* const initialValue = {
  Email: 'izaquedione@gmail.com',
  Senha: '123456',
};
 */


function login(e) {
  const Email = document.getElementById("Email").value
  const Senha = document.getElementById("Senha").value

  firebase
    .auth()
    .signInWithEmailAndPassword(Email, Senha)
    .then(()=>{
      swal("Logado com sucesso!")
      .then(()=>{
        setTimeout(()=>{
          window.location.replace('/')
        },1000)
      })
    })
    .catch((error)=>{
      swal(error.message)
    })
    
    localStorage.setItem('@Email', Email);

    e.preventDefault();
  
}





const LoginForm = () => {

  var firebaseConfig = {
    apiKey: "AIzaSyBjE_PJfjPOQj5Z62oYHEzjEXMy8FetW-Q",
    authDomain: "banco-de-dados-queijos.firebaseapp.com",
    projectId: "banco-de-dados-queijos",
    storageBucket: "banco-de-dados-queijos.appspot.com",
    messagingSenderId: "700330184648",
    appId: "1:700330184648:web:5888ea46e92bc029f7fafd",
    measurementId: "G-Y6DHRX9M37"
  };
  
  if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);    
  }
 
  return (
    <div className="App-form">
      <h1>LOGIN</h1>

     <form className="App-form">
        <div className="produtos-form__group">
          <label htmlFor="Email">Email</label>
          <input id="Email" name="Email" type="text" />
        </div>
        <div className="produtos-form__group">
          <label htmlFor="Senha">Senha</label>
          <input id="Senha" name="Senha" type="password" />
        </div>
        
      </form> 
      <div className="App-form">
         

          <UIButton type="submit" className="btn"
          component={Link} to={"/"}  onClick={login}>
          Login
                </UIButton>

                <br></br>

        <a href="/cadastro"> Primeira vez por aqui? Crie uma conta gratuitamente! </a>


        </div>
    </div>
    
  )


};


export default LoginForm;