import React from 'react';

import {
  Fundo,
  Filtro,
  LogoCama,
  StyledSeta,
  StyledFaInstagram,
  StyledFaWhatsapp,
  StyledFaFacebook,
} from './LandingStyles';

export default function Main() {
  return (
    <>
      <Fundo>
        <Filtro>
          <nav>
            <a
              href="https://www.facebook.com/rentcoliving/"
              className="menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledFaFacebook />
            </a>
            <a
              href="https://www.instagram.com/rentcoliving/"
              className="menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledFaInstagram />
            </a>
            <a
              href="https://wa.me/5551989092637"
              className="menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledFaWhatsapp />
            </a>
          </nav>
          <LogoCama />

          <h1>Viver bem sempre!</h1>
          <StyledSeta />
        </Filtro>
      </Fundo>
    </>
  );
}
