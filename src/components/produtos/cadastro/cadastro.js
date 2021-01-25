import React from 'react';
import "./cadastro.css";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { database } from '../firebase/index.js';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';
import UIButton from 'components/UI/Button/Button';



function cadastrar(e) {
  const Email = document.getElementById("Email").value
  const Senha = document.getElementById("Senha").value

  firebase
    .auth()
    .createUserWithEmailAndPassword(Email, Senha)
    .then(()=>{
      swal("Cadastrado com sucesso!")
       .then(()=>{
        setTimeout(()=>{
          window.location.replace('/')
        },1000)
      })
    })
    .catch((error)=>{
      swal(error.message)
    })
    
    //localStorage.setItem('@Email', Email);

    e.preventDefault();
    
  
}

/* const Form = ({ id }) => {

  const [values, setValues] = useState(id ? null : initialValue);
  

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:4000/Produtos/${id}`)
        .then((response) => {
          setValues(response.data);
        })
    }
  }, []);
}
function onChange(ev) {
  
  const { name, value } = ev.target;

  setValues({ ...values, [name]: value });
}

function onSubmit(ev) {    
  ev.preventDefault();

  database.ref('/usuarios/ '+ uuidv4()).set({
    // id:'1230', 
    nome:values.nome,    
    telefone:values.telefone,
    endereco:values.endereco,
    email:values.email,
    senha:values.senha,
    
  }).then(()=>alert('Cadastrado com sucesso!')).catch((err)=>alert('Erro ao cadastrar: ' + err));
} */
 

const Cadastro = () => {

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
        <div>
            <header className="App-header">
            <form className="App-form" target="_blank" method="get"  > {/*  onSubmit={onSubmit } */}
          <label className="lab">
        
          <div className="Titulo">
          <h1>Cadastro de Usuários</h1>
          </div>
           <p className="texto">Nome: </p>
          <input type="text" name="nome" id="nome" /* onChange={onChange} value={values.nome} */ placeholder="Insira o nome" className="campos" required/>
            <br></br>
          
          <p className="texto">Email: </p>
          <input type= "text" name="Email" id="Email" /* onChange={onChange} value={values.email} */ className="campos" placeholder="Insira o seu email" required/>
            <br></br>
          
          <p className="texto">Telefone: </p>
          <input type= "tel" name="telefone" id="telefone" /* onChange={onChange} value={values.telefone} */ className="campos" placeholder="(xx) xxxxx-xxxx" required/>
            <br></br>
          <p className="texto">Endereço: </p>
          <input type= "text" name="endereco" id="endereco" /* onChange={onChange} value={values.endereco} */ className="campos" placeholder="Insira um endereço" required/>
            <br></br>
          {/* <p className="texto">Usuário: </p>
          <input type= "text" name="usuario" className="campos" placeholder="Insira um usuário" required/>
            <br></br> */}
           
           {/* <p className="texto">Email: </p>
          <input type= "text" id="Email" className="campos" placeholder="Insira um Email" required/>
            <br></br> */}
            <p className="texto">Senha:</p>  
          <input type= "password" id="Senha" className="campos" /* onChange={onChange} value={values.senha} */ placeholder="Insira uma senha" required/>
            <br></br>
          

         {/*  <p className="texto"> Produtor:</p>
          <input type="radio" name="pessoa" value="produtor" id="produtor"/>
          <p className="texto"> Nome Queijaria:</p>
          <input type= "text"  className="campos" placeholder="Insira o nome da Queijaria"/>


          <p className="texto"> Cliente: </p>
          <input type="radio" name="pessoa" value="cliente" id="cliente"/> */}
         
        <br></br>
        

         {/*    <button type="submit" onClick={cadastrar}>Cadastrar</button> */}

      
    
            {/* 
            <input type="reset" className="botao" value="Limpar Campos" />
             */}
          </label>
          <UIButton type="submit" className="btn"
           onClick={cadastrar}>
          Cadastrar
                </UIButton>
        </form>
        
      </header>
          
      
        </div>
        
        
        
    )
};
export default Cadastro;