import React from 'react';
import {
  FaAngleDoubleDown,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

import { Fundo, Content, Filtro, LogoCama } from './LandingStyles';

export default function Main() {
  return (
    <>
      <Content>
        <Fundo>
          <Filtro>
            <nav>
              <a
                href="https://www.facebook.com/rentcoliving/"
                className="menu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook color="#fff" size={46} />
              </a>
              <a
                href="https://www.instagram.com/rentcoliving/"
                className="menu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram color="#fff" size={50} />
              </a>
              <a
                href="https://wa.me/5551989092637"
                className="menu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp color="#fff" size={50} />
              </a>
            </nav>
            <LogoCama />
            <h1>Viva uma nova experiência!</h1>
            <FaAngleDoubleDown color="#fff" size={80} />
          </Filtro>
        </Fundo>
      </Content>
    </>
  );
}
