import styled from 'styled-components';
import Fundo1 from './images/vig_quarto_4.jpg';
import Fundo2 from './images/vig_30a40_3.jpg';
import Fundo3 from './images/vig_30a40_2.jpg';

const Fundos = [Fundo1, Fundo2, Fundo3];

export const Fundo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-top: 80px;

  width: 100%;
  height: 60vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  backface-visibility: hidden;

  background-image: url(${Fundo1});

  z-index: 2;

  animation: slideBG 10s linear infinite 0s;
  animation-timing-function: ease-in-out;

  @keyframes slideBG {
    33% {
      background-image: url(${Fundos[0]});
    }
    66% {
      background-image: url(${Fundos[1]});
    }
    99% {
      background-image: url(${Fundos[2]});
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

  div {
    width: 100%;
    height: 15vh;
    position: relative;
    background-color: #333;
    opacity: 0.9;
  }
  h1,
  h2 {
    width: 95%;
    color: #fff;
    font-family: 'Be Vietnam';
    vertical-align: center;
    margin-left: 2%;
    background-color: transparent;
  }

  h1 {
    font-size: 18px;
  }

  h2 {
    font-size: 14px;
    margin-top: 4%;
  }
`;

export const FirstSection = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background: #fff;
  width: 90%;
  margin-left: 5%;
  position: relative;
  z-index: 3;
  margin-top: 5%;
  margin-bottom: 5%;
  vertical-align: center;
  p {
    color: #222;
    font-family: 'Be Vietnam';
    font-size: 14px;
    margin: 5%;
    width: 80%;
    text-align: left;
    font-weight: bolder;
    display: inline-block;
  }
`;

export const ColivingSection = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background: #fff;
  width: 90%;
  margin-left: 5%;
  position: relative;
  z-index: 3;
  margin-top: 5%;
  margin-bottom: 5%;
  vertical-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
