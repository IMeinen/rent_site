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
                <FaFacebook color="#333333" size={46} />
              </a>
              <a
                href="https://www.instagram.com/rentcoliving/"
                className="menu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram color="#333333" size={50} />
              </a>
              <a
                href="https://www.instagram.com/rentcoliving/"
                className="menu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp color="#333333" size={50} />
              </a>
            </nav>
            <LogoCama />
            <h1>Viva uma nova experiência!</h1>
            <FaAngleDoubleDown color="#333333" size={80} />
          </Filtro>
        </Fundo>
      </Content>
    </>
  );
}
