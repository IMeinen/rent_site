import styled from 'styled-components';

import { FaMousePointer } from 'react-icons/fa';
import Col1 from '../Main/images/rent_riachuelo.jpg';
import Col2 from '../Main/images/coliving_vigario.jpg';
import Col3 from '../Main/images/coliving_universitario.jpg';

const Imagens = [Col1, Col1, Col2, Col3];
export const Fundo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 155vh;
`;

export const Content = styled.div`
  width: 80%;
  padding-bottom: 0px;
  margin-bottom: 0px;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;

  box-shadow: 5px 5px 50px 0 rgba(0, 0, 0, 0.2);
  z-index: 4;

  /* @media (min-width: 1200px) {
    margin-top: 5%;
  } */

  /* tablet*/
  /*
  @media only screen and (min-width: 768px) and (max-width: 1199px) and (-webkit-min-device-pixel-ratio: 1.5) {
    margin-top: 10%;
  }*/
  /* celular */
  /*
  @media only screen and (min-width: 240px) and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 1.5) {
    margin-top: 15%;
  } */
`;

export const Header = styled.div`
  width: 100%;

  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 5%;
  margin-bottom: 40px;
  h1 {
    color: #333;
    font-family: 'Be Vietnam';
    font-size: 40px;
    border-bottom: 1px solid #f78f2d;
  }
`;

export const ColivingIMG = styled.div`
  width: 100%;
  background-color: #333;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 30%;
`;

// COMPONENTES DE ITEMS

export const ContainerImg = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

`;
export const Imagem = styled.div`
  width: 50%;
  height: 100%;
  background-image: ${props => `url(${Imagens[props.Col]}) `};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2%;

  div {
    width: 90%;
    height: 90%;
    margin-top: 5%;
    margin-left: 5%;
    border: 5px solid #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;

    img {
      width: 80px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

export const Descricao = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  width: 50%;
  height: 85%;
  background-color: #fff;
  border-radius: 1%;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  img {
    width: 80px;
  }

  h1,
  h2 {
    color: #333;
    font-family: 'Be Vietnam';
    margin-left: 3%;
  }

  h1 {
    font-size: 40px;
    margin-top: 3%;
    padding-bottom: 3%;
    border-bottom: 1px solid #bbb;
  }
  h2 {
    font-size: 18px;
    margin-top: 1%;
  }
`;
export const StyledPointer = styled(FaMousePointer)`
  color: #fff;
  font-size: 46px;
`;

export const Botao = styled.button`
  width: 50%;
  height: 20%;
  margin-top: auto;
  margin-bottom: 4%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #f78f2d;
  align-self: center;
  border: none;

  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 18px;
    border: none;
  }
`;
