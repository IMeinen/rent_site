import styled from 'styled-components';
import Fundo1 from '../Main/images/fundo1.jpg';
import Fundo2 from '../Main/images/fundo2.jpg';
import Fundo3 from '../Main/images/fundo3.jpg';

import LogoC from '../Main/images/logo_vect.svg';

export const Fundo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: row;
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
  h1 {
    align-items: center;
    align-self: center;
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 80px;
    margin-left: 23%;
  }

  h3 {
    align-items: center;
    align-self: center;
    text-align: center;
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 20px;
    margin-left: 23%;
  }

  /* celular */
  @media only screen and (min-width: 240px) and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 1.5) {
    background-image: url(${Fundo1});
  }

  img {
    position: relative;
    z-index: -1;
    width: 100%;
  }
`;

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: row;
  width: 100%;

  height: 100vh;
  background-color: #fff;
`;

export const Filtro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  backface-visibility: hidden;
  -webkit-box-shadow: -6px 5px 13px 4px rgba(97, 97, 97, 0.65);
  box-shadow: -6px 5px 13px 4px rgba(97, 97, 97, 0.65);
  background-color: rgba(255, 138, 36, 0); /* #f78f2d */
  flex-wrap: wrap;
  position: relative;
  z-index: 2;

  h1 {
    font-family: 'Be Vietnam';
    font-size: 40px;
    margin-left: 0px;
    padding-bottom: 60px;

    color: #fff;
  }

  nav {
    align-self: flex-end;
    justify-self: flex-start;
    justify-content: center;
    align-items: center;
    margin-right: 3%;
    display: flex;
    @media only screen and (min-width: 558px) and (max-width: 1399px) and (-webkit-min-device-pixel-ratio: 1.5) {
      margin-top: 20px;
    }
    @media only screen and (min-width: 200px) and (max-width: 557px) and (-webkit-min-device-pixel-ratio: 1.5) {
      margin-top: 35px;
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
  width: 20%;
  height: 50vh;
  background-image: url(${LogoC});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  position: relative;
  z-index: 3;
`;

export const Teste = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 70vh;

  z-index: 3;
`;
