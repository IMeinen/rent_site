import styled from 'styled-components';

import { FaMousePointer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Col1 from '../Main/images/rent_riachuelo.jpg';
import Col2 from '../Main/images/rent_vigario_fundo.jpg';
import Col3 from '../Main/images/univ_fundo.jpeg';
import Col4 from '../Main/images/bom_fim1.jpeg';

export const MyLink = styled(Link)`
  text-decoration: none;
  @media only screen and (max-width: 1100px) {
    width: 0;
  }
`;

const Imagens = [Col1, Col1, Col2, Col3, Col4];

export const Fundo = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #333;
  width: 90%;

  margin-left: 5%;
  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    height: 50vh;
  }
`;

export const Colivings = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #333;
  padding-top: 2%;
  padding-bottom: 5%;
  width: 100%;
  max-width: 100%;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export const Header = styled.div`
  width: 60%;

  background-color: #333;
  display: block;
  font-weight: bolder;
  height: 3%;
  margin-bottom: 20px;

  text-align: center;
  margin-top: 5%;

  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 40px;
    vertical-align: center;
    position: inline-block;

    @media only screen and (min-width: 1px) and (max-width: 768px) {
      font-size: 26px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 30%;
    height: 8%;
  }
`;

// COMPONENTES DE ITEMS

export const ContainerImg = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    width: 90%;
    height: 24%;
  }
  @media only screen and (min-width: 768px) {
    width: 30%;
    height: 32%;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;
export const Imagem = styled.div`
  width: 400px;
  height: 400px;
  background-image: ${props => `url(${Imagens[props.Col]}) `};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2%;

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    width: 200px;
    height: 200px;
  }

  @media only screen and (min-width: 200px) and (max-width: 767px) {
    width: 300px;
    height: 300px;
  }

  div {
    width: 90%;
    height: 90%;
    margin-top: 5%;
    margin-left: 5%;
    border: ${props =>
      props.Estilizar ? '5px solid #f7532c' : '5px solid #fff'};
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
  background-color: #333;
  border-radius: 1%;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: bolder;

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    width: 70%;
    height: 30%;
  }

  @media only screen and (min-width: 200px) and (max-width: 767px) {
    width: 300px;
    height: 100px;
  }
  img {
    width: 80px;
  }

  div {
    width: 95%;
    border-bottom: 1px solid #fff;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    align-self: center;
    padding-bottom: 15px;
    @media only screen and (min-width: 1000px) {
      width: 350px;
    }
  }
  h1,
  h2,
  h3 {
    color: #fff;
    font-family: 'Be Vietnam';
    margin-left: 3%;
    font-weight: bold;
  }
  h1 {
    font-size: 18px;
    margin-top: 3%;
  }
  h2 {
    font-size: 30px;

    padding-bottom: 2%;
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
      font-size: 16px;
    }
  }
  h3 {
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
      font-size: 10px;
    }
  }
`;
export const StyledPointer = styled(FaMousePointer)`
  color: ${props => (props.Estilizar ? '#f7532c' : '#fff')};
  font-size: 46px;
`;

export const Botao = styled.button`
  width: 50%;
  height: 25%;
  margin-top: auto;
  margin-bottom: 4%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #f7532c;
  align-self: center;
  border: none;

  .link {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 18px;
    border: none;
    text-decoration: none;

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
