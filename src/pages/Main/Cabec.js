import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Cabec } from '../../styles/globals';
import logo from './images/logo_192.png';

export default function Main() {
  return (
    <>
      <Cabec>
        <img src={logo} alt="logo" />
        <nav>
          <a href="/">HOME</a>
          <a href="#vantagens">VANTAGENS</a>
          <a href="/">APARTAMENTOS</a>
          <a href="/">GALERIA</a>
          <a href="/">FALE CONOSCO</a>
        </nav>
        <a href="/" className="menu">
          <FaBars color="#fff" size={28} />
        </a>
        <div className="login">
          <h1>LOGIN</h1>
        </div>
      </Cabec>
    </>
  );
}
