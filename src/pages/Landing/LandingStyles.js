import styled from 'styled-components';
import {
  FaAngleDoubleDown,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import Fundo1 from '../Main/images/fundo1.jpg';
import Fundo2 from '../Main/images/fundo2.jpg';
import Fundo3 from '../Main/images/fundo3.jpg';

import LogoC from '../Main/images/logo_vect.svg';

export const Fundo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 80px;

  width: 100%;
  height: 100vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  backface-visibility: hidden;

  background-image: url(${Fundo1});

  z-index: 2;

  @media (min-width: 1200px) {
    animation: slideBG 8s linear infinite 0s;
    animation-timing-function: ease-in-out;

    @keyframes slideBG {
      20% {
        background-image: url(${Fundo1});
      }
      66% {
        background-image: url(${Fundo2});
      }
      99% {
        background-image: url(${Fundo3});
      }
    }
  }

  /* celular */
  @media only screen and (min-width: 240px) and (max-width: 767px) {
    background-image: url(${Fundo1});
  }

  img {
    position: relative;
    z-index: -1;
    width: 100%;
  }
`;

export const Filtro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
  border: 2px solid #f78f2d;
  position: relative;

  flex-wrap: wrap;

  z-index: 2;

  h1 {
    font-family: 'Be Vietnam';
    font-size: 40px;
    margin-left: 0px;
    color: #fff;

    @media only screen and (min-width: 558px) and (max-width: 1399px) {
      font-size: 34px;
    }
    @media only screen and (min-width: 200px) and (max-width: 557px) {
      font-size: 18px;
    }
  }

  nav {
    position: absolute;
    top: 0px;
    right: 0px;
    justify-content: center;
    align-items: center;
    margin-right: 3%;
    display: flex;
    @media only screen and (min-width: 1400px) {
      margin-top: 25px;
    }
    @media only screen and (min-width: 558px) and (max-width: 1399px) {
      margin-top: 20px;
    }
    @media only screen and (min-width: 200px) and (max-width: 557px) {
      margin-top: 12px;
    }
  }

  a {
    justify-content: center;
    align-items: center;
    margin: 3px;
  }
`;

export const LogoCama = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: center;

  background-image: url(${LogoC});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 3;

  @media only screen and (min-width: 1200px) {
    width: 20%;
    height: 50vh;
  }

  @media only screen and (min-width: 558px) and (max-width: 1199px) {
    width: 22%;
    height: 54vh;
  }

  @media only screen and (min-width: 200px) and (max-width: 557px) {
    width: 30%;
    height: 56vh;
  }
`;
export const StyledSeta = styled(FaAngleDoubleDown)`
  margin-top: 15px;
  color: #fff;
  font-size: 80px;
  @media only screen and (min-width: 200px) and (max-width: 1199px) {
    font-size: 40px;
  }
`;

export const StyledFaFacebook = styled(FaFacebook)`
  color: #fff;
  font-size: 46px;
  @media only screen and (min-width: 200px) and (max-width: 1199px) {
    font-size: 32px;
  }
`;

export const StyledFaInstagram = styled(FaInstagram)`
  color: #fff;
  font-size: 46px;
  @media only screen and (min-width: 200px) and (max-width: 1199px) {
    font-size: 32px;
  }
`;

export const StyledFaWhatsapp = styled(FaWhatsapp)`
  color: #fff;
  font-size: 46px;
  @media only screen and (min-width: 200px) and (max-width: 1199px) {
    font-size: 32px;
  }
`;
