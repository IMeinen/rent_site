import React from 'react';

import { Link } from 'react-scroll';

import { Cabec } from '../../styles/globals';
import logo from './images/logo_192.png';
import MyMenuAcademia from './MyMenuAcademia';

export default function Main() {
  return (
    <>
      <Cabec>
        <img src={logo} alt="logo" />

        <nav>
          <Link to="Home" spy smooth duration={500}>
            HOME
          </Link>
          <Link to="Home" spy smooth duration={500}>
            SOBRE
          </Link>
          <Link to="Vantagens" spy smooth duration={500}>
            DIFERENCIAIS
          </Link>
          <Link to="Apartamentos" spy smooth duration={500}>
            COLIVINGS
          </Link>
          <Link to="Contato" spy smooth duration={500}>
            CONTATO
          </Link>
        </nav>

        <MyMenuAcademia />

        <div className="login">
          <h1>LOGIN</h1>
        </div>
      </Cabec>
    </>
  );
}
