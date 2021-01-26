import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import { storage,database } from '../firebase/index.js';
import './form.css';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';





const initialValue = {
  title: '',
  price: 0,
  quantidade: 0,
  imageUrl: '',
  descricao: '',
  queijaria:'',
}

const Form = ({ id }) => {

  const [values, setValues] = useState(id ? null : initialValue);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:4000/Produtos/${id}`)
        .then((response) => {
          setValues(response.data);
        })
    }
  }, []);


  const history = useHistory();


  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {    
    ev.preventDefault();

    const id = uuidv4();
    localStorage.setItem('@idprod', id);
    database.ref(`/produtos/` + id ).set({
      id: id,
      nome:values.nome,
      src: values.imageUrl,
      descricao:values.descricao,
      queijaria:values.queijaria,
      price: values.price,
      quantidade: values.quantidade,
    }).then(()=>alert('Cadastrado com sucesso!')).catch((err)=>alert('Erro ao cadastrar: ' + err));
  
    
  
  }

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            swal("Upload feito com sucesso!")
              .then (<Redirect to='/'/>)
            // setValues(...initialValue, initialValue.imageUrl = url);
            setValues({ ...values, 'imageUrl': url });
            
          });
      }
    );
  };


  return (
    <div className="App-form">
      <div className="produtos-title">
        <h1 >É QUEIJO UAI</h1>
        <h2 >Cadastrar novo Produto</h2>
      </div>
      {!values
        ? (
          <div>Carregando...</div>
        ) : (
          <form onSubmit={onSubmit} >
            <div className="produtos-form__group">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" onChange={onChange} placeholder="Insira o nome do produto" />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="price">Preço</label>
              <input id="price" name="price" type="number" onChange={onChange} value={values.price} />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="quantidade">Quantidade</label>
              <input id="quantidade" name="quantidade" type="number" onChange={onChange} value={values.quantidade} />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="descricao">Descrição</label>
              <textarea id="descricao" name="descricao" type="textarea" onChange={onChange} value={values.descricao} placeholder="Insira a decrição do produto" />
            </div>
            <br></br>
            <div className="produtos-form__group">
            <label htmlFor="queijaria">Selecione a Queijaria</label>
            
            <select  onChange={onChange} name="queijaria" id="queijaria" value={values.queijaria}>
               <option value="Edson Mussarela">Edson Mussarela</option>
               <option value="JC Queijaria">JC Queijaria </option>
               <option value="Liu Queijaria">Liu Queijaria</option>
               <option value="Queijaria da Dinda">Queijaria da Dinda</option>
               <option value="Queijaria Dona Saúde">Queijaria Dona Saúde</option>
               <option value="Queijaria Estrela da Serra">Queijaria Estrela da Serra</option>
               <option value="Queijaria Rubi">Queijaria Rubi</option>
               <option value="Requeijão Toko">Requeijão Toko</option>

            </select>
            </div>
            <br></br>
            <div className="produtos-form__group">
              <label htmlFor="imageUrl">Imagem</label>
              <input id="imageUrl" name="imageUrl" type="text" onChange={onChange} value={values.imageUrl} />
              <div>
                <progress value={progress} max="100" />
                <br />
                <br />

                <input type="file" onChange={handleChange} />
                <button onClick={handleUpload}>Upload</button>
                <br />
                {/* {url} */}
                <br />
                {/* <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" width="120px" height="120px" /> */}
              </div>
              <button className="produtos-form__group" type="submit">Salvar</button>

            </div>
            
            <div>
              

            </div>
          </form>
        )}
    </div>
  )
}

export default Form;