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
  background: linear-gradient(to right, #f78f2d, #f7532c);
  width: 100%;
  height: 90vh;
  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    height: 50vh;
  }

  @media only screen and (min-width: 200px) and (max-width: 767px) {
    height: 200vh;
  }
`;

export const Content = styled.div`
  /* border: 20px solid #f78f2d; */
  width: 80%;
  padding-bottom: 0px;
  margin-bottom: 0px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    flex-wrap: wrap;
  }

  align-items: center;
  justify-content: space-around;
  height: 90%;

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

  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 5%;
  margin-bottom: 20px;
  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 40px;
    border-bottom: 1px solid #f78f2d;
  }
`;

export const ColivingIMG = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
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
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (min-width: 200px) and (max-width: 768px) {
    width: 90%;
    height: 32%;
  }
`;
export const Imagem = styled.div`
  width: 90%;
  height: 50%;
  background-image: ${props => `url(${Imagens[props.Col]}) `};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2%;

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    width: 90%;
    height: 35%;
  }

  @media only screen and (min-width: 200px) and (max-width: 767px) {
    width: 100%;
    height: 70%;
  }
  div {
    width: 90%;
    height: 90%;
    margin-top: 5%;
    margin-left: 5%;
    border: ${props =>
      props.Estilizar ? '5px solid #f78f2d' : '5px solid #fff'};
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
  width: 70%;
  height: 40%;
  background-color: #fff;
  border-radius: 1%;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    width: 70%;
    height: 30%;
  }
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
    @media only screen and (min-width: 1320px) and (max-width: 1500px) {
      font-size: 34px;
    }
    @media only screen and (min-width: 1200px) and (max-width: 1319px) {
      font-size: 30px;
    }

    @media only screen and (min-width: 1000px) and (max-width: 1119px) {
      font-size: 26px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1119px) {
      font-size: 20px;
    }

    @media only screen and (min-width: 200px) and (max-width: 767px) {
      font-size: 18px;
    }
  }
  h2 {
    font-size: 18px;
    margin-top: 1%;
    @media only screen and (min-width: 1320px) and (max-width: 1500px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 1200px) and (max-width: 1319px) {
      font-size: 14px;
    }
    @media only screen and (min-width: 1000px) and (max-width: 1199px) {
      font-size: 12px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1119px) {
      font-size: 10px;
    }

    @media only screen and (min-width: 200px) and (max-width: 767px) {
      font-size: 8px;
    }
  }
`;
export const StyledPointer = styled(FaMousePointer)`
  color: ${props => (props.Estilizar ? '#f78f2d' : '#fff')};
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

    @media only screen and (min-width: 1320px) and (max-width: 1500px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 1200px) and (max-width: 1319px) {
      font-size: 13px;
    }
    @media only screen and (min-width: 1000px) and (max-width: 1199px) {
      font-size: 11px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1119px) {
      font-size: 10px;
    }

    @media only screen and (min-width: 200px) and (max-width: 767px) {
      font-size: 9px;
    }
  }
`;
