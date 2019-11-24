import styled from 'styled-components';
import FundoDiagonal from '../Main/images/fundo_diagonal2.svg';
import ImagemExemplo from '../Main/images/foto_sobre.jpg';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;

  background: linear-gradient(to right, #f78f2d, #f7532c);
`;

export const Centro = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  background-image: url(${ImagemExemplo});
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateX(5.5%);
  margin-bottom: 20px;

  @media only screen and (min-width: 1700px) {
    border: 30px solid #333;
    width: 40%;
    height: 90%;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1699px) {
    border: 25px solid #333;
    width: 40%;
    height: 90%;
    margin-left: 12%;
  }

  /* @media only screen and (min-width: 768px) and (max-width: 1199px)  {
    border: 20px solid #333;
    width: 40%;
    height: 80%;
    margin-left: 12%;
  } */

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    border: 18px solid #333;
    width: 50%;
    height: 50%;
    margin-left: 8%;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    border: 15px solid #333;
    width: 90%;
    height: 50%;
    margin-left: 8%;
  }

  @media only screen and (min-width: 200px) and (max-width: 479px) {
    border: 10px solid #333;
    width: 90%;
    height: 60vh;
  }
`;

export const Description = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background-color: #fff;

  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  margin-top: 5%;
  @media only screen and (min-width: 200px) and (max-width: 699px) {
    width: 90%;
  }

  h1 {
    color: #111;
    font-family: 'Be Vietnam';
    font-size: 20px;
    margin-top: 2%;
    margin-left: 5%;

    @media only screen and (min-width: 1700px) {
      font-size: 40px;
    }

    @media only screen and (min-width: 1200px) and (max-width: 1699px) {
      font-size: 36px;
    }
  }

  p {
    margin-top: 1%;
    margin-left: 5%;
    width: 90%;
    padding-bottom: 14px;
    color: #111;
    font-family: 'Be Vietnam';
    text-align: left;

    @media only screen and (min-width: 1700px) {
      font-size: 18px;
    }

    @media only screen and (min-width: 1200px) and (max-width: 1699px) {
      font-size: 12px;
    }

    @media only screen and (min-width: 800px) and (max-width: 1199px) {
      font-size: 10px;
    }

    @media only screen and (min-width: 640px) and (max-width: 799px) {
      font-size: 8px;
    }

    @media only screen and (min-width: 700px) and (max-width: 1000px) {
      font-size: 12px;
    }

    @media only screen and (min-width: 200px) and (max-width: 699px) {
      font-size: 10px;
    }
  }
`;

export const Botao = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background-color: #f78f2d;
  width: 16%;
  height: 10%;
  margin-left: -17%;
  margin-top: 35%;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    margin-left: -17%;
    margin-top: 55%;

    height: 8%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1100px) {
    margin-left: -49%;
    margin-top: 100%;

    height: 6%;
  }

  @media only screen and (min-width: 200px) and (max-width: 767px) {
    margin-left: -55%;
    margin-top: 145%;
    width: 24%;
    height: 6%;
  }
  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    @media only screen and (min-width: 1700px) {
      font-size: 22px;
    }
    @media only screen and (min-width: 1200px) and (max-width: 1699px) {
      font-size: 18px;
    }

    @media only screen and (min-width: 950px) and (max-width: 1199px) {
      font-size: 15px;
    }

    @media only screen and (min-width: 768px) and (max-width: 949px) {
      font-size: 12px;
    }

    @media only screen and (min-width: 200px) and (max-width: 767px) {
      font-size: 8px;
    }
  }
`;
