import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './NavBar.css';
import { IconContext } from 'react-icons';
import logomenu from '../imagens/logo.jpg';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import Menu from '@material-ui/core/Menu';




function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  //let Email = localStorage.getItem('@Email');

  var user = firebase.auth().currentUser;
  var email;

if (user != null) {
  email = user.email;
}else{
  email="";
  
}


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        
          <Link to='#' className='menu-bars'>

            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {<h1 className="titulo">APROQUEIJO</h1>}
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                
                <AiIcons.AiOutlineClose />
              </Link>
              
            </li>
            <img src={logomenu} className='logomenu'/>
            <h1 className='bemvindo'>{`Bem vindo ${email}`}</h1>
            {SidebarData.map((item, index) => {
              return (
                
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                    
                  </Link>
                  
                </li>
                
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;