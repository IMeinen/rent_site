import styled from 'styled-components';
import Fundo1 from './images/fundo1.jpg';
import Fundo2 from './images/fundo2.jpg';
import Fundo3 from './images/fundo3.jpg';
import HG from './images/hostel_gen.jpg';

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
  -webkit-box-shadow: -6px 5px 13px 4px rgba(97, 97, 97, 0.65);
  box-shadow: -6px 5px 13px 4px rgba(97, 97, 97, 0.65);
  background-image: url(${Fundo1});
  position: relative;
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
  display: flex;
  flex-direction: row;
  width: 100%;

  height: 100vh;
  background-color: #fff;

  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 20px;
  }
`;

export const Filtro = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
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
  background-color: rgba(247, 143, 45, 0.8); /* #f78f2d */
  flex-wrap: wrap;
  position: relative;
  z-index: 2;

  h1 {
    font-family: 'Mansalva', cursive;
    font-size: 40px;
    margin-left: 0px;
    padding-bottom: 60px;

    color: #333333;
  }
`;

export const LogoCama = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: center;
  width: 20%;
  height: 50vh;

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

export const Content2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  height: 70vh;
  background-color: #fff;
  margin-top: 5%;
  margin-left: 5%;
  z-index: 3;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  height: 40vh;
  background-color: #fff;

  z-index: 3;
  border-right: 1px solid #f78f2d;

  h1 {
    color: #000;
    font-family: 'Be Vietnam';
    font-size: 40px;
  }

  p {
    margin-top: 5%;
    color: #000;
    font-family: 'Be Vietnam';
    font-size: 18px;
    width: 50%;
  }
`;

export const IMGBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 40%;
  height: 40vh;
  margin-left: 5%;
  z-index: 3;

  background-image: url(${HG});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;
