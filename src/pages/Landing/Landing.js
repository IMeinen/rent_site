import React from 'react';

import { Link } from 'react-scroll';
import {
  Fundo,
  Filtro,
  LogoCama,
  StyledSeta,
  StyledFaInstagram,
  StyledFaWhatsapp,
  StyledFaFacebook,
  FundoDoFundo,
} from './LandingStyles';

export default function Main() {
  return (
    <>
      <Fundo>
        <FundoDoFundo>
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
                href="https://wa.me/5551989567225"
                className="menu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledFaWhatsapp />
              </a>
            </nav>
            <LogoCama />

            <h1>Viver bem sempre!</h1>
            <Link to="Home" className="bm-item" spy smooth duration={500}>
              <StyledSeta />
            </Link>
          </Filtro>
        </FundoDoFundo>
      </Fundo>
    </>
  );
}
